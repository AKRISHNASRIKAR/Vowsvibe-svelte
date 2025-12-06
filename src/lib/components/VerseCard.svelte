<script lang="ts">
  import type { ParsedVerse } from '$lib/services/chapters.service';

  export let verse: ParsedVerse;
  export let onToggle: () => void;
</script>

<button
  on:click={onToggle}
  class="relative w-full aspect-[3/4] cursor-pointer hover:scale-105 transition-transform duration-200"
>
  <img src="/chapter.png" alt="Verse {verse.verse_number}" class="w-full h-full object-contain" />
  <div class="absolute inset-0 bg-black/50 rounded-lg"></div>
  <div class="absolute inset-0 flex flex-col items-center justify-center">
    <span class="text-white text-lg sm:text-xl font-bold mb-2">{verse.verse_number}</span>
    <div
      class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-all duration-300"
    >
      <svg
        class="w-4 h-4 sm:w-5 sm:h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
</button>
