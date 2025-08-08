<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	const words = ['WORK', 'INNOVATE', 'SHIP', 'CREATE', 'BUILD', 'DESIGN', 'PROTOTYPE'];
	const intervalMs = 1600;
	const colorSchemes = [
		'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]', // WORK - bright white with glow
		'text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]', // INNOVATE - brighter cyan with neon glow
		'text-fuchsia-300 drop-shadow-[0_0_12px_rgba(240,171,252,0.9)]', // SHIP - bright fuchsia (not pink which blends)
		'text-yellow-300 drop-shadow-[0_0_12px_rgba(253,224,71,0.9)]', // CREATE - bright yellow with glow
		'text-lime-300 drop-shadow-[0_0_12px_rgba(163,230,53,0.9)]', // BUILD - lime instead of green for contrast
		'text-violet-300 drop-shadow-[0_0_12px_rgba(196,181,253,0.9)]', // DESIGN - bright violet (not purple which blends)
		'text-orange-300 drop-shadow-[0_0_12px_rgba(251,146,60,0.9)]' // PROTOTYPE - bright orange with glow
	];

	let currentIndex = $state(0);
	let timer: number | null = $state(null);
	let isPaused = $state(false);
	let reducedMotion = $state(false);
	let currentColor = $state(colorSchemes[0] ?? 'text-white');

	function startCycle() {
		stopCycle();
		if (reducedMotion || isPaused || words.length <= 1) return;
		timer = window.setInterval(() => {
			triggerNext();
		}, intervalMs) as unknown as number;
	}

	function stopCycle() {
		if (timer !== null) {
			clearInterval(timer);
			timer = null;
		}
	}

	function triggerNext() {
		if (isPaused) return;
		currentIndex = (currentIndex + 1) % Math.max(words.length, 1);
		currentColor = colorSchemes[currentIndex % colorSchemes.length] ?? 'text-white';
	}

	function handleMouseEnter() {
		isPaused = true;
		stopCycle();
	}

	function handleMouseLeave() {
		isPaused = false;
		startCycle();
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			if (isPaused) {
				isPaused = false;
				startCycle();
			} else {
				isPaused = true;
				stopCycle();
			}
		}
	}

	onMount(() => {
		try {
			reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		} catch {}
		startCycle();
	});

	onDestroy(() => {
		stopCycle();
	});
</script>

<span
	class={`relative inline-block transition-colors duration-300 ease-in-out select-none ${currentColor}`}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	data-paused={isPaused}
	aria-live="off"
	role="button"
	aria-pressed={isPaused}
	aria-label={`Animated word: ${words[currentIndex] ?? ''}. ${isPaused ? 'Press Enter to resume' : 'Press Enter to pause'}`}
	tabindex="0"
	onfocus={handleMouseEnter}
	onblur={handleMouseLeave}
	onkeydown={handleKeyDown}
>
	{words[currentIndex] ?? ''}
</span>
