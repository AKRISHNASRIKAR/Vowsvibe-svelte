<script lang="ts">
	import { chapters } from '$lib/data/chapters';
	import ChapterCard from '$lib/components/ChapterCard.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
</script>

<svelte:head>
	<title>Bhagavad Gita - All Chapters</title>
	<meta
		name="description"
		content="Explore all 18 chapters of the Bhagavad Gita with detailed verses and translations."
	/>
</svelte:head>

<!-- Hero Section -->
<HeroSection />

<!-- Chapters Section -->
<section class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
	<!-- Book Icon -->
	<div class="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
		<img src="/images/gita_open.png" alt="Sacred Book" class="h-20 w-auto md:h-24 drop-shadow-2xl" />
	</div>

	<!-- Section Title -->
	<div class="flex justify-center mb-20">
		<div class="text-center">
			<h2
				class="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.5em] text-[#bd003c] pb-3 border-b-2 border-[#bd003c]"
			>
				GITA CHAPTERS
			</h2>
		</div>
	</div>

	<!-- Chapters Grid -->
	<div
		class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 md:gap-16 justify-items-center"
	>
		{#each chapters as chapter (chapter.id)}
			<ChapterCard {chapter} />
		{/each}
	</div>
</section>
