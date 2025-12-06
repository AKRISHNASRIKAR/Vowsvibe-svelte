import { apiClient } from './api';

// BhagavadGita.io API format
export interface ApiVerseRaw {
	id: number;
	verse_number: number;
	chapter_number: number;
	slug: string;
	text: string; // Sanskrit
	transliteration: string;
	word_meanings: string;
	translations: Array<{
		id: number;
		description: string;
		author_name: string;
		language: string;
	}>;
}

export interface ParsedVerse {
	verse_number: number;
	text: string;
	transliteration: string;
	translation: string;
	word_meanings: string;
}

function parseVerseData(verse: ApiVerseRaw): ParsedVerse {
	// Get the first English translation
	const englishTranslation = verse.translations?.find((t) => t.language === 'english');

	return {
		verse_number: verse.verse_number,
		text: verse.text || '',
		transliteration: verse.transliteration || '',
		translation: englishTranslation?.description || '',
		word_meanings: verse.word_meanings || ''
	};
}

export const chaptersService = {
	async getChapterVerses(chapterNumber: number): Promise<ParsedVerse[]> {
		try {
			const response = await apiClient.get<ApiVerseRaw[]>(chapterNumber);

			console.log('API Response:', response);
			console.log('Is array?:', Array.isArray(response));

			if (!Array.isArray(response)) {
				console.error('Response is not an array:', response);
				return [];
			}

			const parsedVerses = response.map(parseVerseData);

			console.log('Parsed verses count:', parsedVerses.length);
			console.log('First verse:', parsedVerses[0]);

			return parsedVerses;
		} catch (error) {
			console.error(`Error fetching chapter ${chapterNumber}:`, error);
			throw new Error(
				error instanceof Error ? error.message : `Failed to fetch chapter ${chapterNumber}`
			);
		}
	}
};
