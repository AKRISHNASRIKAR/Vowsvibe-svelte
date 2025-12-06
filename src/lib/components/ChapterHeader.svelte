<script lang="ts">
	import type { Chapter } from '$lib/types';
	import HeroSection from './HeroSection.svelte';

	export let chapter: Chapter;
</script>

<!-- Hero Section -->
<HeroSection showBookIcon={false} />

<div class="bg-gradient-to-b from-amber-50 to-amber-100 py-8">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Back Button -->
		<div class="mb-8">
			<a href="/" class="text-[#bd003c] hover:text-[#8b0028] transition-colors text-sm">
				&lt; Back
			</a>
		</div>

		<!-- Open Book Icon -->
		<div class="flex justify-center mb-6">
			<img src="/images/gita_open.png" alt="Open Gita" class="h-16 w-auto" />
		</div>

		<!-- Chapter Title -->
		<div class="text-center mb-8">
			<h1
				class="text-3xl md:text-4xl font-light tracking-wider text-[#bd003c] border-b-2 border-[#bd003c] inline-block pb-2"
			>
				CHAPTER {chapter.id}
			</h1>
		</div>

		<!-- Verse Label -->
		<div class="border-t-2 border-[#bd003c] pt-4">
			<h2 class="text-xl font-light text-[#bd003c] tracking-wider">Verse</h2>
		</div>
	</div>
</div>
