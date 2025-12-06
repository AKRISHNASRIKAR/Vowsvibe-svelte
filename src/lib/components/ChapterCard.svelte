<script lang="ts">
	import type { Chapter } from '$lib/types';

	export let chapter: Chapter;

	let isHovered = false;
</script>

<a
	href="/chapter/{chapter.id}"
	class="group relative block w-full"
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
>
	<!-- Diamond Container -->
	<div class="relative w-full aspect-square min-h-[120px]">
		<!-- Diamond Shape with rotation -->
		<div
			class="absolute inset-0 transform rotate-45 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 {isHovered
				? 'scale-110 shadow-2xl'
				: 'scale-100'}"
		>
			<!-- Background Image -->
			<div class="w-full h-full transform -rotate-45 scale-150">
				<img
					src="/images/chapter-bg.jpg"
					alt="Chapter {chapter.id}"
					class="w-full h-full object-cover transition-opacity duration-300 {isHovered
						? 'opacity-50'
						: 'opacity-80'}"
				/>
				<!-- Gradient Overlay -->
				<div
					class="absolute inset-0 bg-linear-to-br from-amber-900/40 via-amber-800/30 to-amber-700/40 transition-opacity duration-300 {isHovered
						? 'opacity-70'
						: 'opacity-100'}"
				></div>
			</div>
			
			<!-- Black horizontal bar (counter-rotated to stay horizontal) -->
			<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-[150%] h-[80px] bg-black/30"></div>
		</div>

		<!-- Content (not rotated) -->
		<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
			<div class="text-center relative">
				<!-- Chapter Number -->
				<div
					class="text-xl md:text-2xl font-medium text-white drop-shadow-2xl transition-transform duration-300 {isHovered
						? 'scale-110'
						: 'scale-100'}"
				>
					{chapter.id}
				</div>
			</div>
		</div>
	</div>
</a>

<style>
	a {
		cursor: pointer;
	}

	a:active {
		transform: scale(0.95);
	}
</style>
