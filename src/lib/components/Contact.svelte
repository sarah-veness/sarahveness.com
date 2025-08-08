<script lang="ts">
	import GlitchText from '$lib/components/GlitchText.svelte';
	let formData = {
		name: '',
		email: '',
		message: ''
	};

	function handleSubmit() {
		console.log('Form submitted:', formData);
		alert("Thanks for your message! I'll get back to you soon.");

		formData = { name: '', email: '', message: '' };
	}
</script>

<section
	id="contact"
	class="bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 px-4 py-20 sm:px-8"
>
	<div
		class="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-8 text-center sm:gap-12"
	>
		<h2
			class="flex w-full items-center justify-center gap-3 neo-title text-2xl text-black sm:gap-6 sm:text-4xl md:text-6xl"
		>
			LET'S <GlitchText /> TOGETHER
		</h2>

		<div class="w-full neo-card bg-white sm:w-fit sm:min-w-96">
			<form
				onsubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<div class="grid gap-4 sm:grid-cols-2">
					<input
						type="text"
						placeholder="YOUR NAME"
						class="neo-input"
						bind:value={formData.name}
						required
					/>
					<input
						type="email"
						placeholder="YOUR EMAIL"
						class="neo-input"
						bind:value={formData.email}
						required
					/>
				</div>

				<textarea
					placeholder="TELL ME ABOUT YOUR PROJECT"
					rows="4"
					class="mt-4 neo-input w-full resize-none"
					bind:value={formData.message}
					required
				></textarea>

				<div class="mt-6 flex justify-center">
					<button type="submit" class="neo-btn w-full bg-green-400 hover:bg-green-300 sm:w-fit">
						SEND MESSAGE
					</button>
				</div>
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
