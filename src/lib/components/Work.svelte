<script lang="ts">
	const projects = [
		{
			title: 'Project Alpha',
			description: 'A revolutionary web application that changes everything',
			tech: ['Svelte', 'TypeScript', 'Tailwind'],
			color: 'bg-pink-400'
		},
		{
			title: 'Beta Platform',
			description: 'Enterprise-grade solution for modern businesses',
			tech: ['React', 'Node.js', 'PostgreSQL'],
			color: 'bg-cyan-400'
		},
		{
			title: 'Gamma Studio',
			description: 'Creative tools for digital artists and designers',
			tech: ['Python', 'Flask', 'AI/ML'],
			color: 'bg-yellow-400'
		}
	];
</script>

<section id="projects" class="bg-white px-4 py-20">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center neo-title text-4xl md:text-6xl">
			SELECTED <span class="text-purple-500">WORK</span>
		</h2>

		<div class="grid gap-8 md:grid-cols-3">
			{#each projects as project}
				<div
					class="group cursor-pointer neo-card transition-transform duration-300 hover:scale-105"
				>
					<div
						class="h-48 w-full {project.color} mb-6 flex items-center justify-center neo-border group-hover:animate-pulse"
					>
						<span class="neo-title text-2xl text-black">PROJECT</span>
					</div>

					<h3 class="mb-3 neo-title text-xl">{project.title}</h3>
					<p class="mb-4 text-base leading-relaxed font-medium">{project.description}</p>

					<div class="flex flex-wrap gap-2">
						{#each project.tech as tech}
							<span class="bg-black px-2 py-1 neo-mono text-xs font-bold text-white">
								{tech}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<button class="neo-btn bg-purple-400 hover:bg-purple-300"> VIEW ALL PROJECTS </button>
		</div>
	</div>
</section>
