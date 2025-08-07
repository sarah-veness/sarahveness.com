<script lang="ts">
	const skills = ['TypeScript', 'Svelte', 'React', 'Node.js', 'Python', 'Design', 'UX/UI'];
</script>

<section id="about" class="bg-black px-4 py-20 text-white">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center neo-title text-4xl md:text-6xl">
			<span class="text-yellow-400">ABOUT</span> ME
		</h2>

		<div class="grid items-center gap-8 md:grid-cols-2">
			<div class="space-y-6">
				<div class="neo-card bg-white text-black">
					<h3 class="mb-4 neo-title text-2xl text-pink-500">WHO I AM</h3>
					<p class="text-lg leading-relaxed font-medium">
						I'm a passionate developer and designer who believes in creating digital experiences
						that are both functional and visually striking. I don't follow trends - I set them.
					</p>
				</div>

				<div class="neo-card bg-white text-black">
					<h3 class="mb-4 neo-title text-2xl text-cyan-500">WHAT I DO</h3>
					<p class="text-lg leading-relaxed font-medium">
						From concept to deployment, I build full-stack applications with a focus on user
						experience and modern technologies. Every project is a chance to push boundaries.
					</p>
				</div>
			</div>

			<div class="space-y-4">
				<h3 class="mb-6 neo-title text-2xl text-green-400">SKILLS & TOOLS</h3>
				<div class="grid grid-cols-2 gap-3">
					{#each skills as skill}
						<div class="neo-card bg-orange-400 text-center text-black">
							<span class="neo-mono font-bold">{skill}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
