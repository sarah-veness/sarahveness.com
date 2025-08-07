<script lang="ts">
	import { currentSection } from '$lib/stores';

	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	const sections = ['hero', 'contact'];
	const sectionColors = {
		hero: 'bg-pink-400',
		about: 'bg-cyan-400',
		projects: 'bg-yellow-400',
		contact: 'bg-green-400'
	};

	const sectionHoverColors = {
		hero: 'hover:bg-pink-400/50',
		about: 'hover:bg-cyan-400/50',
		projects: 'hover:bg-yellow-400/50',
		contact: 'hover:bg-green-400/50'
	};
</script>

<nav class="fixed top-4 left-1/2 z-50 -translate-x-1/2 transform px-4">
	<div class="flex max-w-screen gap-1 overflow-x-auto neo-card bg-white p-1">
		{#each sections as section}
			<button
				onclick={() => scrollToSection(section)}
				class="nav-btn px-2 py-2 text-xs font-bold tracking-wide whitespace-nowrap uppercase transition-all duration-200 sm:px-4 sm:text-sm {$currentSection ===
				section
					? sectionColors[section as keyof typeof sectionColors]
					: ''} {sectionHoverColors[section as keyof typeof sectionHoverColors]}"
			>
				{section}
			</button>
		{/each}
	</div>
</nav>
