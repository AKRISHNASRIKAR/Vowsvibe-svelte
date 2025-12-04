<script lang="ts">
	import { chapters } from '$lib/data/chapters';
	import ChapterCard from '$lib/components/ChapterCard.svelte';
</script>

<svelte:head>
	<title>Bhagavad Gita - All Chapters</title>
	<meta
		name="description"
		content="Explore all 18 chapters of the Bhagavad Gita with detailed verses and translations."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-linear-to-b from-amber-50 via-amber-100 to-amber-50">
	<!-- Title Bar -->
	<div class="relative py-6 md:py-8">
		<div class="absolute inset-0 bg-white/60"></div>
		<h1 class="relative text-5xl md:text-7xl font-serif tracking-[0.3em] text-[#3e4939] text-center">
			BHAGAVAD GITA
		</h1>
	</div>

	<!-- Background Image -->
	<div class="relative h-[300px] md:h-[400px]">
		<img
			src="/images/hero-bg.jpg"
			alt="Bhagavad Gita Hero"
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-g-to-b from-transparent to-amber-50/50"></div>
	</div>
</section>

<!-- Chapters Section -->
<section class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12">
	<!-- Book Icon -->
	<div class="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
		<img src="/images/gita_open.png" alt="Sacred Book" class="h-20 w-auto md:h-24 drop-shadow-2xl" />
	</div>
	<!-- Section Title -->
	<div class="flex justify-center mb-20">
		<div class="text-center">
			<h2
				class="text-3xl md:text-2xl font-medium tracking-tight   text-[#bd004d] pb-3 border-b-2 border-[#bd004d]"
			>
				GITA CHAPTERS
			</h2>
		</div>
	</div>

	<!-- Chapters Grid -->
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-15 md:gap-20">
		{#each chapters as chapter (chapter.id)}
			<ChapterCard {chapter} />
		{/each}
	</div>
</section>
