<script lang="ts">
  import type { ParsedVerse } from '$lib/services/chapters.service';

  export let verse: ParsedVerse;
  export let onClose: () => void;
</script>

<!-- Modal backdrop -->
<div 
  class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fadeIn"
  on:click={onClose}
  on:keydown={(e) => e.key === 'Escape' && onClose()}
  role="dialog"
  aria-modal="true"
>
  <!-- Modal content -->
  <div 
    class="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
    on:click|stopPropagation
    role="document"
  >
    <!-- Header -->
    <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
      <h2 class="text-2xl font-bold text-[#bd003c]">Verse {verse.verse_number}</h2>
      <button
        on:click={onClose}
        class="text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close modal"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Content -->
    <div class="px-6 py-6 space-y-6">
      {#if verse.text}
        <div>
          <h3 class="text-base font-semibold text-gray-700 mb-3">Sanskrit:</h3>
          <p class="text-xl text-gray-900 leading-relaxed font-sanskrit">{verse.text}</p>
        </div>
      {/if}

      {#if verse.transliteration}
        <div>
          <h3 class="text-base font-semibold text-gray-700 mb-3">Transliteration:</h3>
          <p class="text-lg text-gray-700 italic leading-relaxed">{verse.transliteration}</p>
        </div>
      {/if}

      {#if verse.translation}
        <div>
          <h3 class="text-base font-semibold text-gray-700 mb-3">Translation:</h3>
          <p class="text-base text-gray-800 leading-relaxed">{verse.translation}</p>
        </div>
      {/if}

      {#if verse.word_meanings}
        <div>
          <h3 class="text-base font-semibold text-gray-700 mb-3">Word Meanings:</h3>
          <p class="text-sm text-gray-600 leading-relaxed">{verse.word_meanings}</p>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
  }

  .animate-slideUp {
    animation: slideUp 0.3s ease-out;
  }

  .font-sanskrit {
    font-family: 'Noto Sans Devanagari', 'Tiro Devanagari Sanskrit', sans-serif;
  }
</style>
