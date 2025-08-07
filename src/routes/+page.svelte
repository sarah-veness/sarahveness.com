<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;
	let currentSection = 'hero';

	onMount(() => {
		mounted = true;

		// Add intersection observer for section tracking
		const sections = document.querySelectorAll('section');
		const observer = new IntersectionObserver(
			(entries) => {
				// Find the entry with the highest intersection ratio
				let maxRatio = 0;
				let mostVisibleSection = 'hero';

				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
						maxRatio = entry.intersectionRatio;
						mostVisibleSection = entry.target.id || 'hero';
					}
				});

				if (maxRatio > 0) {
					currentSection = mostVisibleSection;
				}
			},
			{ threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0] }
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

	const skills = ['TypeScript', 'Svelte', 'React', 'Node.js', 'Python', 'Design', 'UX/UI'];
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

	// Form handling
	let formData = {
		name: '',
		email: '',
		message: ''
	};

	function handleSubmit() {
		// Add form submission logic here
		console.log('Form submitted:', formData);
		alert("Thanks for your message! I'll get back to you soon.");

		// Reset form
		formData = { name: '', email: '', message: '' };
	}
</script>

<svelte:head>
	<title>Sarah Veness - Developer & Designer</title>
	<meta
		name="description"
		content="Full-stack developer and designer creating bold digital experiences"
	/>
</svelte:head>

<main class="min-h-screen">
	<!-- Navigation -->
	<nav class="fixed top-4 left-1/2 z-50 -translate-x-1/2 transform px-4">
		<div class="flex max-w-screen gap-1 overflow-x-auto neo-card bg-white p-1">
			<button
				onclick={() => scrollToSection('hero')}
				class="nav-btn px-2 py-2 text-xs font-bold tracking-wide whitespace-nowrap uppercase transition-all duration-200 sm:px-4 sm:text-sm {currentSection ===
				'hero'
					? 'bg-pink-400'
					: 'bg-gray-100 hover:bg-gray-200'}"
			>
				HOME
			</button>
			<button
				onclick={() => scrollToSection('about')}
				class="nav-btn px-2 py-2 text-xs font-bold tracking-wide whitespace-nowrap uppercase transition-all duration-200 sm:px-4 sm:text-sm {currentSection ===
				'about'
					? 'bg-cyan-400'
					: 'bg-gray-100 hover:bg-gray-200'}"
			>
				ABOUT
			</button>
			<button
				onclick={() => scrollToSection('projects')}
				class="nav-btn px-2 py-2 text-xs font-bold tracking-wide whitespace-nowrap uppercase transition-all duration-200 sm:px-4 sm:text-sm {currentSection ===
				'projects'
					? 'bg-yellow-400'
					: 'bg-gray-100 hover:bg-gray-200'}"
			>
				WORK
			</button>
			<button
				onclick={() => scrollToSection('contact')}
				class="nav-btn px-2 py-2 text-xs font-bold tracking-wide whitespace-nowrap uppercase transition-all duration-200 sm:px-4 sm:text-sm {currentSection ===
				'contact'
					? 'bg-green-400'
					: 'bg-gray-100 hover:bg-gray-200'}"
			>
				CONTACT
			</button>
		</div>
	</nav>

	<section
		id="hero"
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
					onclick={() => scrollToSection('projects')}
					class="w-full neo-btn bg-pink-400 hover:bg-pink-300 sm:w-auto"
				>
					VIEW WORK
				</button>
				<button
					onclick={() => scrollToSection('contact')}
					class="w-full neo-btn bg-cyan-400 hover:bg-cyan-300 sm:w-auto"
				>
					CONTACT ME
				</button>
			</div>
		</div>
	</section>

	<!-- About Section -->
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

	<!-- Projects Section -->
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

	<!-- Contact Section -->
	<section
		id="contact"
		class="bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 px-4 py-20"
	>
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
				<a href="https://github.com/sarahveness" class="neo-btn bg-white hover:bg-gray-100">
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

	<!-- Footer -->
	<footer class="bg-black px-4 py-8 text-white">
		<div class="mx-auto max-w-6xl text-center">
			<p class="neo-mono text-sm">© 2025 SARAH VENESS. BUILT WITH SVELTE & LOVE.</p>
			<p class="mt-2 neo-mono text-xs text-gray-400">NEOBRUTALISM NEVER GOES OUT OF STYLE.</p>
		</div>
	</footer>
</main>
