import { apiClient } from './api';

export interface ApiVerseRaw {
  geeta_id: string;
  chapter_no: string;
  shlok_no: string;
  lyrics: string;
  music: string;
  qr: string;
}

interface SanskritApiResponse {
  status: number;
  message: string;
  data: ApiVerseRaw[];
}

export interface ParsedVerse {
  verse_number: number;
  text: string;
  transliteration: string;
  translation: string;
  word_meanings: string;
}

// strip HTML from `lyrics`
function extractTextFromHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseVerseData(verse: ApiVerseRaw): ParsedVerse {
  const fullText = extractTextFromHtml(verse.lyrics ?? '');

  return {
    verse_number: parseInt(verse.shlok_no) || 0,
    text: fullText.substring(0, 300) || `Verse ${verse.shlok_no}`,
    transliteration: '',
    translation: fullText,
    word_meanings: ''
  };
}

export const chaptersService = {
  async getChapterVerses(chapterNumber: number): Promise<ParsedVerse[]> {
    try {
      const response = await apiClient.get<SanskritApiResponse>(chapterNumber);
      console.log('API Response (client):', response);

      if (!response?.data || !Array.isArray(response.data)) {
        console.error('Response.data is not array:', response);
        return [];
      }

      const parsedVerses = response.data
        .filter(v => v.shlok_no !== '99')
        .map(parseVerseData)
        .filter(v => v.verse_number > 0);

      console.log('Parsed verses:', parsedVerses);
      return parsedVerses;
    } catch (error) {
      console.error(`Error fetching chapter ${chapterNumber}:`, error);
      throw new Error(`Failed to fetch chapter ${chapterNumber}`);
    }
  }
};