import { writable } from 'svelte/store';
import { chaptersService, type ParsedVerse } from '$lib/services/chapters.service';

interface VersesState {
	data: ParsedVerse[];
	loading: boolean;
	error: string | null;
}

function createVersesStore() {
	const { subscribe, set, update } = writable<VersesState>({
		data: [],
		loading: false,
		error: null
	});

	return {
		subscribe,

		// Load all verses for a chapter
		async loadChapterVerses(chapterId: number) {
			update((state) => ({ ...state, loading: true, error: null }));

			try {
				const verses = await chaptersService.getChapterVerses(chapterId);
				set({ data: verses, loading: false, error: null });
			} catch (error) {
				const errorMessage = error instanceof Error ? error.message : 'Failed to load verses';
				set({ data: [], loading: false, error: errorMessage });
			}
		},

		// Reset store
		reset() {
			set({ data: [], loading: false, error: null });
		}
	};
}

export const versesStore = createVersesStore();
