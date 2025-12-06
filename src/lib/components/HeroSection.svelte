<script lang="ts">
	export let showBookIcon = true;
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-linear-to-b from-amber-50 via-amber-100 to-amber-50">
	<!-- Title Bar -->
	<div class="relative py-6 md:py-8">
		<div class="absolute inset-0 bg-white/40"></div>
		<h1
			class="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.3em] text-[#2c3e2d] text-center [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] [word-spacing:1rem]"
		>
			BHAGAVAD GĪTĀ
		</h1>
	</div>

	<!-- Background Image -->
	<div class="relative h-[300px] md:h-[400px]">
		<img src="/images/hero-bg.jpg" alt="Bhagavad Gita Hero" class="w-full h-full object-cover" />
		<div class="absolute inset-0 bg-linear-to-b from-transparent to-amber-50/50"></div>
	</div>

	<!-- Book Icon (optional) -->
	{#if showBookIcon}
		<div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
			<img src="/images/gita_open.png" alt="Sacred Book" class="h-20 w-auto md:h-24 drop-shadow-2xl" />
		</div>
	{/if}
</section>
