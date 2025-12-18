<script lang="ts">
	import { dev } from '$app/environment';
	import { fade } from 'svelte/transition';
	import GlitchText from '$lib/components/GlitchText.svelte';

	let error = $state('');
	let formSent = $state(false);
	let isSubmitting = $state(false);
	let successTimer: any = null;
	let errorTimer: any = null;

	function setSuccessMessage() {
		if (successTimer) clearTimeout(successTimer);
		formSent = true;

		successTimer = setTimeout(() => {
			formSent = false;
			successTimer = null;
		}, 5000);
	}

	function setErrorMessage(message: string) {
		// Clear any existing timer
		if (errorTimer) clearTimeout(errorTimer);

		error = message;

		// Set timer to auto-dismiss after 5 seconds
		errorTimer = setTimeout(() => {
			error = '';
			errorTimer = null;
		}, 5000);
	}

	async function handleNetlifySubmission(form: HTMLFormElement, formData: FormData) {
		// In development, we can't submit to Netlify, so just simulate success
		if (dev) {
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
			return { success: true };
		}

		// In production, submit to Netlify
		try {
			const response = await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData as any).toString()
			});
			return { success: response.ok };
		} catch (err) {
			return { success: false };
		}
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		const formData = new FormData(form);

		isSubmitting = true;
		error = '';
		formSent = false;

		// Clear any existing messages and timers
		if (successTimer) clearTimeout(successTimer);
		if (errorTimer) clearTimeout(errorTimer);

		const result = await handleNetlifySubmission(form, formData);

		if (result.success) {
			setSuccessMessage();
			form.reset();
		} else {
			setErrorMessage('Sorry, there was an error sending your message. Please try again.');
		}

		isSubmitting = false;
	}
</script>

<section
	id="contact"
	class="bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 px-4 py-10 sm:px-8"
>
	<div
		class="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center gap-8 text-center sm:gap-12"
	>
		<h2
			class="flex w-full items-center justify-center gap-3 neo-title text-2xl text-black sm:gap-6 md:text-6xl"
		>
			LET'S <GlitchText /> TOGETHER
		</h2>

		<div class="w-full neo-card bg-white md:w-4xl">
			<form
				name="contact"
				method="POST"
				data-netlify="true"
				data-netlify-honeypot="company"
				onsubmit={handleSubmit}
			>
				<input type="hidden" name="form-name" value="contact" />

				<div class="grid gap-4 sm:grid-cols-2">
					<input type="text" placeholder="YOUR NAME" class="neo-input" required name="name" />
					<input type="email" placeholder="YOUR EMAIL" class="neo-input" required name="email" />
				</div>

				<textarea
					placeholder="TELL ME ABOUT YOUR PROJECT"
					rows="4"
					class="mt-4 neo-input w-full resize-none"
					required
					name="message"
				></textarea>

				<div class="mt-6 flex justify-center">
					<button
						type="submit"
						class="neo-btn w-full bg-green-400 hover:bg-green-300 disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit"
						disabled={isSubmitting}
					>
						{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
					</button>
				</div>

				{#if formSent}
					<div class="mt-6 neo-card bg-pink-400 text-center" transition:fade>
						<p class="text-lg font-bold text-black">✨ MESSAGE SENT! ✨</p>
						<p class="mt-2 text-base font-medium text-black">I'll get back to you soon!</p>
					</div>
				{/if}

				{#if error}
					<div class="mt-6 neo-card bg-red-400 text-center" transition:fade>
						<p class="text-lg font-bold text-black">⚠️ OOPS! ⚠️</p>
						<p class="mt-2 text-base font-medium text-black">
							{error}
						</p>
					</div>
				{/if}
			</form>
		</div>

		<div class="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
			<a
				href="mailto:hello@sarahveness.com"
				class="neo-btn bg-orange-400 text-black hover:bg-orange-300 sm:w-fit"
			>
				EMAIL
			</a>
			<a
				href="https://github.com/sarah-veness"
				class="neo-btn bg-white hover:bg-gray-100 sm:w-fit"
				target="_blank"
			>
				GITHUB
			</a>
			<a
				href="https://linkedin.com/in/sarahveness"
				class="neo-btn bg-blue-400 hover:bg-blue-300 sm:w-fit"
				target="_blank"
			>
				LINKEDIN
			</a>
			<a
				href="https://twitter.com/sarahveness"
				class="neo-btn bg-cyan-400 hover:bg-cyan-300 sm:w-fit"
				target="_blank"
			>
				TWITTER
			</a>
		</div>
	</div>
</section>
