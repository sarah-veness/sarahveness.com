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
		class="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-8 sm:py-8"
	>
		<div class="absolute inset-0 -z-10">
			<!-- Mobile optimized background shapes -->
			<!-- Original shapes -->
			<div
				class="absolute top-16 left-4 size-16 rotate-12 bg-pink-400 neo-shadow neo-border sm:top-20 sm:left-10 sm:h-32 sm:w-32"
			></div>
			<div
				class="absolute top-32 right-4 h-24 w-24 rotate-12 bg-cyan-400 neo-shadow neo-border sm:top-40 sm:right-20 sm:h-48 sm:w-48"
			></div>
			<div
				class="absolute bottom-40 left-4 h-20 w-20 -rotate-12 bg-yellow-400 neo-shadow neo-border sm:bottom-32 sm:left-1/4 sm:h-40 sm:w-40"
			></div>
			<div
				class="absolute right-4 bottom-24 h-14 w-14 rotate-45 bg-green-400 neo-shadow neo-border sm:right-10 sm:bottom-20 sm:h-28 sm:w-28"
			></div>

			<!-- Additional colorful shapes -->
			<!-- Orange circle - far upper left -->
			<div
				class="absolute top-12 left-16 h-10 w-10 rotate-45 rounded-full bg-orange-400 neo-shadow neo-border sm:top-16 sm:left-32 sm:h-20 sm:w-20"
			></div>

			<!-- Purple triangle-like shape - upper right, more spaced -->
			<div
				class="absolute top-8 right-20 h-8 w-16 -rotate-12 bg-purple-400 neo-shadow neo-border sm:top-12 sm:right-40 sm:h-16 sm:w-32"
			></div>

			<!-- Red small square - lower left, more spaced -->
			<div
				class="absolute bottom-20 left-20 h-6 w-6 rotate-12 bg-red-400 neo-shadow neo-border sm:bottom-28 sm:left-40 sm:h-12 sm:w-12"
			></div>

			<!-- Teal rounded rectangle - lower right, well spaced -->
			<div
				class="absolute right-16 bottom-16 h-8 w-12 -rotate-45 rounded-lg bg-teal-400 neo-shadow neo-border sm:right-32 sm:bottom-24 sm:h-16 sm:w-24"
			></div>

			<!-- Indigo diamond - mid-left, more spaced from edge -->
			<div
				class="absolute top-2/5 left-12 h-6 w-6 rotate-45 bg-indigo-400 neo-shadow neo-border sm:top-2/5 sm:left-24 sm:h-12 sm:w-12"
			></div>

			<!-- Rose wide rectangle - bottom center area -->
			<div
				class="absolute bottom-8 left-1/2 h-4 w-14 rotate-12 bg-rose-400 neo-shadow neo-border sm:bottom-12 sm:left-1/2 sm:h-8 sm:w-28"
			></div>

			<!-- Emerald tall rectangle - upper right, well spaced -->
			<div
				class="absolute top-1/5 right-12 h-12 w-4 -rotate-12 bg-emerald-400 neo-shadow neo-border sm:top-1/5 sm:right-24 sm:h-24 sm:w-8"
			></div>

			<!-- Violet small circle - lower left, good spacing -->
			<div
				class="absolute bottom-32 left-32 h-5 w-5 rounded-full bg-violet-400 neo-shadow neo-border sm:bottom-40 sm:left-48 sm:h-10 sm:w-10"
			></div>

			<!-- Desktop-only shapes to fill empty space -->
			<!-- Bottom area - extremely spread out -->
			<div
				class="absolute right-4 bottom-4 hidden h-12 w-12 rotate-12 bg-teal-500 neo-shadow neo-border sm:block"
			></div>
			<div
				class="absolute bottom-20 left-1/4 hidden h-10 w-10 rotate-12 bg-lime-400 neo-shadow neo-border sm:block"
			></div>

			<!-- Mid area - very far spacing -->
			<div
				class="absolute top-1/2 right-4 hidden h-8 w-8 -rotate-12 bg-sky-400 neo-shadow neo-border sm:block"
			></div>

			<!-- Upper area - massive spread -->
			<div
				class="absolute top-4 right-12 hidden h-12 w-12 rotate-12 bg-blue-400 neo-shadow neo-border sm:block"
			></div>
			<div
				class="absolute top-8 left-1/3 hidden h-8 w-8 rotate-45 bg-amber-400 neo-shadow neo-border sm:block"
			></div>

			<!-- Left side cluster - much more spread out -->
			<div
				class="absolute top-1/2 left-20 hidden h-10 w-16 -rotate-12 bg-fuchsia-400 neo-shadow neo-border sm:block"
			></div>
			<div
				class="absolute top-1/3 left-8 hidden h-8 w-8 rotate-45 bg-purple-300 neo-shadow neo-border sm:block"
			></div>

			<!-- Additional scattered singles -->
			<div
				class="absolute top-1/4 right-32 hidden h-6 w-12 rotate-12 bg-rose-300 neo-shadow neo-border sm:block"
			></div>
			<div
				class="absolute bottom-12 left-1/3 hidden h-8 w-8 rounded-full bg-emerald-300 neo-shadow neo-border sm:block"
			></div>
		</div>

		<div class="mx-auto w-full max-w-4xl px-4 text-center">
			<h1 class="glitch mb-6 neo-title text-6xl md:text-8xl lg:text-9xl">
				<span class="block text-black">SARAH</span>
				<span class="-mt-1 block text-pink-500 sm:-mt-2 md:-mt-4">VENESS</span>
			</h1>

			<div class="mx-auto mb-8 w-full max-w-2xl neo-card bg-white sm:w-fit">
				<p class="text-base font-bold sm:text-lg md:text-xl lg:text-2xl">
					FULL-STACK DEVELOPER & DESIGNER
				</p>
				<p class="mt-4 text-sm font-medium sm:text-base lg:text-lg">
					Your vision, your brand. Amplified digitally.
				</p>
			</div>

			<div class="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
				<button
					onclick={() => scrollToSection('contact')}
					class="neo-btn w-full bg-cyan-400 hover:bg-cyan-300 sm:w-fit"
				>
					CONTACT ME
				</button>
			</div>
		</div>
	</section>

	<Contact />
	<Footer />
</main>
