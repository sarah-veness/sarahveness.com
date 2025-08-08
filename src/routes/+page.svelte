<script lang="ts">
	import { onMount } from 'svelte';

	import { Nav, Contact, Footer } from '$lib/components';
	import { currentSection } from '$lib/stores';

	onMount(() => {
		const sections = document.querySelectorAll('section');
		const observer = new IntersectionObserver(
			(entries) => {
				let maxRatio = 0;
				let mostVisibleSection = 'home';

				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
						maxRatio = entry.intersectionRatio;
						mostVisibleSection = entry.target.id || 'home';
					}
				});

				if (maxRatio > 0) {
					$currentSection = mostVisibleSection;
				}
			},
			{ threshold: [0.9] }
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	});

	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>Sarah Veness - Developer & Designer</title>
	<meta
		name="description"
		content="Full-stack developer and designer based in Squamish, BC, creating bold digital experiences"
	/>
</svelte:head>

<main class="min-h-screen">
	<Nav />

	<section
		id="home"
		class="relative flex min-h-screen items-center justify-center overflow-hidden p-4 sm:p-8"
	>
		<div class="absolute inset-0 -z-10">
			<!-- Mobile optimized background shapes -->
			<div
				class="absolute top-16 left-4 h-16 w-16 rotate-12 bg-pink-400 neo-shadow-lg neo-border sm:top-20 sm:left-10 sm:h-32 sm:w-32"
			></div>
			<div
				class="absolute top-32 right-4 h-12 w-12 rotate-45 bg-cyan-400 neo-shadow neo-border sm:top-40 sm:right-20 sm:h-24 sm:w-24"
			></div>
			<div
				class="absolute bottom-40 left-4 h-20 w-20 -rotate-12 bg-yellow-400 neo-shadow-xl neo-border sm:bottom-32 sm:left-1/4 sm:h-40 sm:w-40"
			></div>
			<div
				class="absolute right-4 bottom-24 h-14 w-14 rotate-45 bg-green-400 neo-shadow neo-border sm:right-10 sm:bottom-20 sm:h-28 sm:w-28"
			></div>
		</div>

		<div class="mx-auto max-w-4xl px-2 text-center">
			<h1 class="glitch mb-6 neo-title text-6xl md:text-8xl lg:text-9xl">
				<span class="block text-black">SARAH</span>
				<span class="-mt-2 block text-pink-500 sm:-mt-4">VENESS</span>
			</h1>

			<div class="mx-auto mb-8 max-w-2xl neo-card bg-white">
				<p class="text-lg font-bold sm:text-xl md:text-2xl">FULL-STACK DEVELOPER & DESIGNER</p>
				<p class="mt-4 text-base font-medium sm:text-lg">
					Creating bold digital experiences that break the rules
				</p>
			</div>

			<div class="flex flex-col flex-wrap justify-center gap-3 px-4 sm:flex-row sm:gap-4">
				<button
					onclick={() => scrollToSection('contact')}
					class="w-full neo-btn bg-cyan-400 hover:bg-cyan-300 sm:w-auto"
				>
					CONTACT ME
				</button>
			</div>
		</div>
	</section>

	<Contact />
	<Footer />
</main>
