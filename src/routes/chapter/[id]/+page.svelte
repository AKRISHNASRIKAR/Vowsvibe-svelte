<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { chapters } from '$lib/data/chapters';
  import { versesStore } from '$lib/stores/verses.store';
  import ChapterHeader from '$lib/components/ChapterHeader.svelte';
  import VerseCard from '$lib/components/VerseCard.svelte';
  import VerseModal from '$lib/components/VerseModal.svelte';

  $: chapterId = parseInt($page.params.id || '0');
  $: chapter = chapters.find((c) => c.id === chapterId);

  $: verses = $versesStore.data;
  $: loading = $versesStore.loading;
  $: error = $versesStore.error;

  let selectedVerse: number | null = null;
  $: currentVerse = verses.find(v => v.verse_number === selectedVerse);

  onMount(() => {
    if (chapterId) {
      versesStore.loadChapterVerses(chapterId);
    }
    return () => versesStore.reset();
  });

  function openVerse(verseNumber: number) {
    selectedVerse = verseNumber;
  }

  function closeModal() {
    selectedVerse = null;
  }
</script>

<svelte:head>
  <title>{chapter ? `Chapter ${chapter.id}: ${chapter.name}` : 'Chapter Not Found'} - Bhagavad Gita</title>
</svelte:head>

{#if chapter}
  <ChapterHeader {chapter} />

  <div class="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {#if loading}
        <div class="flex justify-center items-center py-20">
          <div class="text-center">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#bd003c] border-t-transparent"></div>
            <p class="mt-4 text-gray-600">Loading verses...</p>
          </div>
        </div>
      {:else if error}
        <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded max-w-2xl mx-auto">
          <p class="text-red-700 font-medium">Error: {error}</p>
          <button
            on:click={() => versesStore.loadChapterVerses(chapterId)}
            class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      {:else}
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
          <!-- Whole Chapter Card -->
          <div class="relative w-full aspect-[3/4]">
            <img src="/chapter.png" alt="Whole Chapter" class="w-full h-full object-contain" />
            <div class="absolute inset-0 bg-black/50 rounded-lg"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-white text-xs sm:text-sm font-semibold mb-2 text-center px-2">Whole<br />Chapter</span>
              <button class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-all duration-300">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Individual Verses -->
          {#each verses as verse (verse.verse_number)}
            <VerseCard {verse} onToggle={() => openVerse(verse.verse_number)} />
          {/each}

          <!-- End of Chapter Card -->
          <div class="relative w-full aspect-[3/4]">
            <img src="/chapter.png" alt="End of Chapter" class="w-full h-full object-contain" />
            <div class="absolute inset-0 bg-black/50 rounded-lg"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-white text-xs sm:text-sm font-semibold text-center px-2">End of<br />Chapter</span>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
{:else}
  <div class="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded">
        <h2 class="text-2xl font-bold text-red-700 mb-2">Chapter Not Found</h2>
        <p class="text-red-600 mb-4">The chapter you're looking for doesn't exist.</p>
        <a href="/" class="text-red-700 hover:text-red-900 underline">Return to Home</a>
      </div>
    </div>
  </div>
{/if}

<!-- Modal -->
{#if currentVerse}
  <VerseModal verse={currentVerse} onClose={closeModal} />
{/if}
