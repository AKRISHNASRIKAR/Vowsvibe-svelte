export interface Chapter {
  /** Unique chapter identifier (1-18) */
  id: number;

  /** Name of the chapter in Sanskrit/English */
  name: string;

  /** Total number of verses/slokas in chapter */
  verses: number;

  /** Short description of chapter theme */
  description: string;
}

/**
 * Extended chapter with full content and verses
 * Used when displaying detailed chapter information
 */
export interface ChapterDetail extends Chapter {
  /** Introduction or summary of the chapter */
  introduction?: string;

  /** Array of verses/slokas in this chapter */
  content: Verse[];

  /** Optional additional metadata */
  metadata?: ChapterMetadata;
}

/**
 * Individual verse (sloka) from a chapter
 */
export interface Verse {
  /** Verse number within the chapter */
  number: number;

  /** Original Sanskrit text */
  text: string;

  /** English translation */
  translation: string;

  /** Detailed meaning/interpretation */
  meaning?: string;

  /** Alternative translations */
  alternativeTranslations?: string[];

  /** Related verses */
  relatedVerses?: number[];
}

/**
 * Chapter metadata for additional information
 */
export interface ChapterMetadata {
  /** When the chapter was composed */
  composedYear?: string;

  /** Primary theme or topic */
  theme: string;

  /** Keywords associated with chapter */
  keywords: string[];

  /** Difficulty level for readers */
  difficulty: 'beginner' | 'intermediate' | 'advanced';

  /** Estimated reading time in minutes */
  readingTime: number;
}

/**
 * API response for chapters list
 */
export interface ChaptersResponse {
  /** Array of all chapters */
  chapters: Chapter[];

  /** Total count of chapters */
  total: number;

  /** Optional pagination info */
  pagination?: {
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

/**
 * API response for single chapter
 */
export interface ChapterResponse {
  /** The requested chapter */
  chapter: Chapter;

  /** Timestamp of retrieval */
  timestamp: string;
}

/**
 * API response for chapter with full content
 */
export interface ChapterContentResponse {
  /** Complete chapter data with verses */
  chapter: ChapterDetail;

  /** Timestamp of retrieval */
  timestamp: string;
}

/**
 * Search/Filter parameters for chapters
 */
export interface ChapterFilterOptions {
  /** Search query */
  query?: string;

  /** Filter by difficulty */
  difficulty?: 'beginner' | 'intermediate' | 'advanced';

  /** Filter by theme */
  theme?: string;

  /** Sort order */
  sortBy?: 'id' | 'name' | 'verses' | 'difficulty';

  /** Sort direction */
  sortOrder?: 'asc' | 'desc';

  /** Pagination limit */
  limit?: number;

  /** Pagination offset */
  offset?: number;
}
