<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/globals.css';
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>

<style>
	:global(html, body) {
		background-color: rgb(254 243 199);
		color: rgb(17 24 39);
	}
</style>
