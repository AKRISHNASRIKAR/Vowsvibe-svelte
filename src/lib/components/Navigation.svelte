<script lang="ts">
	import { page } from '$app/stores';
	import { NAV_ITEMS } from '$lib/data/constants';
	import type { NavItem } from '$lib/types';

	const navItems: NavItem[] = NAV_ITEMS as NavItem[];

	let openDropdown: string | null = null;

	// Track active page
	$: isActive = (href: string) => {
		if (href === '/' && $page.url.pathname === '/') return true;
		if (href !== '/' && $page.url.pathname.startsWith(href)) return true;
		return false;
	};

	function toggleDropdown(label: string) {
		openDropdown = openDropdown === label ? null : label;
	}

	function closeDropdown() {
		openDropdown = null;
	}
</script>

<nav class="hidden md:flex gap-8 items-center">
	{#each navItems as item (item.label)}
		<div class="relative group">
			{#if item.dropdown}
				<!-- Dropdown Menu Item -->
				<button
					on:click={() => toggleDropdown(item.label)}
					on:mouseenter={() => (openDropdown = item.label)}
					on:mouseleave={closeDropdown}
					class="relative text-gray-600 hover:text-amber-700 font-medium text-sm transition-colors duration-300 flex items-center gap-1 {isActive(
						item.href
					)
						? 'text-amber-700'
						: ''}"
				>
					{item.label}
					<svg
						class="w-4 h-4 transition-transform duration-200 {openDropdown === item.label
							? 'rotate-180'
							: ''}"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
					{#if isActive(item.href)}
						<span class="absolute bottom-0 left-0 w-full h-0.5 bg-amber-700 rounded-full"></span>
					{/if}
				</button>

				<!-- Dropdown Panel -->
				{#if openDropdown === item.label}
					<div
						role="menu"
						on:mouseenter={() => (openDropdown = item.label)}
						on:mouseleave={closeDropdown}
						class="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
					>
						{#each item.dropdown as dropdownItem (dropdownItem.href)}
							<a
								href={dropdownItem.href}
								role="menuitem"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200"
							>
								{dropdownItem.label}
							</a>
						{/each}
					</div>
				{/if}
			{:else}
				<!-- Regular Menu Item -->
				<a
					href={item.href}
					class="relative text-gray-600 hover:text-amber-700 font-medium text-sm transition-colors duration-300 {isActive(
						item.href
					)
						? 'text-amber-700'
						: ''}"
				>
					{item.label}
					{#if isActive(item.href)}
						<span class="absolute bottom-0 left-0 w-full h-0.5 bg-amber-700 rounded-full"></span>
					{/if}
				</a>
			{/if}
		</div>
	{/each}
</nav>

<!-- Mobile Menu Button -->
<button
	class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-amber-100 transition-colors duration-200"
	aria-label="Toggle mobile menu"
>
	<svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
	</svg>
</button>
