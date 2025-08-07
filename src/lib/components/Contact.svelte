<script lang="ts">
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

<section id="contact" class="bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 px-4 py-20">
	<div class="mx-auto max-w-4xl text-center">
		<h2 class="mb-8 neo-title text-4xl text-black md:text-6xl">
			LET'S <span class="text-white">WORK</span> TOGETHER
		</h2>

		<div class="mb-8 neo-card bg-white">
			<p class="mb-6 text-xl font-bold">Ready to create something extraordinary?</p>

			<form
				onsubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<div class="grid gap-4 md:grid-cols-2">
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
					class="mt-4 w-full resize-none neo-input"
					bind:value={formData.message}
					required
				></textarea>

				<button type="submit" class="mt-6 neo-btn bg-green-400 hover:bg-green-300">
					SEND MESSAGE
				</button>
			</form>
		</div>

		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="mailto:hello@sarahveness.com"
				class="neo-btn bg-orange-400 text-black hover:bg-orange-300"
			>
				EMAIL
			</a>
			<a href="https://github.com/sarah-veness" class="neo-btn bg-white hover:bg-gray-100">
				GITHUB
			</a>
			<a href="https://linkedin.com/in/sarahveness" class="neo-btn bg-blue-400 hover:bg-blue-300">
				LINKEDIN
			</a>
			<a href="https://twitter.com/sarahveness" class="neo-btn bg-cyan-400 hover:bg-cyan-300">
				TWITTER
			</a>
		</div>
	</div>
</section>
