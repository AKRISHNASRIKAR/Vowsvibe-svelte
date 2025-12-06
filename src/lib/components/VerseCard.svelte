<script lang="ts">
    import type { ParsedVerse } from '$lib/services/chapters.service';
    import { onMount } from 'svelte';

    export let verse: ParsedVerse;
    export let isExpanded: boolean = false;
    export let onToggle: () => void;

    // Debug: Log when component receives verse data
    $: console.log('VerseCard received verse:', verse);
    
    onMount(() => {
        console.log('VerseCard mounted with verse:', verse.verse_number);
    });
</script>

<div class="relative w-full">
    <!-- Verse Scroll Card -->
    <button
        on:click={onToggle}
        class="relative w-full aspect-3/4 cursor-pointer hover:scale-105 transition-transform duration-200"
    >
        <img src="/chapter.png" alt="Verse {verse.verse_number}" class="w-full h-full object-contain" />
        <div class="absolute inset-0 bg-black/50 rounded-lg"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="text-white text-lg sm:text-xl font-bold mb-2">{verse.verse_number}</span>
            <div
                class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-all duration-300"
            >
                <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform {isExpanded
                        ? 'rotate-180'
                        : ''}"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    </button>

    <!-- Expanded Verse Content -->
    {#if isExpanded}
        <div class="mt-4 bg-white rounded-lg shadow-xl p-4 sm:p-6 border-2 border-[#bd003c] animate-fadeIn">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-lg sm:text-xl font-semibold text-[#bd003c]">Verse {verse.verse_number}</h3>
                <button
                    on:click={onToggle}
                    class="text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Close verse details"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="space-y-4">
                {#if verse.text}
                    <div>
                        <h4 class="text-sm font-semibold text-gray-700 mb-2">Sanskrit:</h4>
                        <p class="text-gray-800 leading-relaxed">{verse.text}</p>
                    </div>
                {/if}

                {#if verse.transliteration}
                    <div>
                        <h4 class="text-sm font-semibold text-gray-700 mb-2">Transliteration:</h4>
                        <p class="text-gray-600 italic">{verse.transliteration}</p>
                    </div>
                {/if}

                {#if verse.translation}
                    <div>
                        <h4 class="text-sm font-semibold text-gray-700 mb-2">Translation:</h4>
                        <p class="text-gray-800">{verse.translation}</p>
                    </div>
                {/if}

                {#if verse.word_meanings}
                    <div>
                        <h4 class="text-sm font-semibold text-gray-700 mb-2">Word Meanings:</h4>
                        <p class="text-gray-600 text-sm">{verse.word_meanings}</p>
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</div>

<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
    }
</style>
