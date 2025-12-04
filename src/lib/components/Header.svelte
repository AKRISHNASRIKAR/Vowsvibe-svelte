<script lang="ts">
	import Navigation from './Navigation.svelte';
</script>

<header class="sticky top-0 z-100 bg-white border-b border-gray-200 shadow-sm">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
		<div class="flex justify-between items-center">
			<!-- Logo Section -->
			<a href="/" class="shrink-0 hover:opacity-80 transition-opacity duration-200">
				<img src="/images/logo.png" alt="Wellbeing Svasti Logo" class="h-12 w-auto" />
			</a>

			<!-- Navigation with Search Icon -->
			<div class="flex items-center gap-6">
				<button
					class="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-amber-100 transition-colors duration-200"
					aria-label="Search"
				>
					<svg
						class="w-5 h-5 text-gray-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
				<Navigation />
			</div>
		</div>
	</div>
</header>

<style>
	header {
		backdrop-filter: blur(10px);
		background-color: rgba(255, 255, 255, 0.95);
	}
</style>
