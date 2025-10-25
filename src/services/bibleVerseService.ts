import fallbackVerse from '../data/dailyVerseFallback.json';

export type DailyVerseSource = 'api' | 'fallback';

export interface DailyVerse {
  reference: string;
  text: string;
  version?: string;
}

export interface DailyVerseResult {
  verse: DailyVerse;
  source: DailyVerseSource;
  errorMessage?: string;
}

const DAILY_VERSE_API = 'https://beta.ourmanna.com/api/v1/get/?format=json';

const FALLBACK_VERSE: DailyVerse = {
  reference: fallbackVerse.reference,
  text: fallbackVerse.text,
  version: fallbackVerse.version,
};

function normaliseApiResponse(data: unknown): DailyVerse | null {
  if (!data || typeof data !== 'object') {
    return null;
  }

  const verseContainer = (data as Record<string, unknown>).verse;
  if (!verseContainer || typeof verseContainer !== 'object') {
    return null;
  }

  const details = (verseContainer as Record<string, unknown>).details ?? verseContainer;
  if (!details || typeof details !== 'object') {
    return null;
  }

  const detailRecord = details as Record<string, unknown>;
  const reference = typeof detailRecord.reference === 'string'
    ? detailRecord.reference
    : typeof detailRecord.verse === 'string'
      ? detailRecord.verse
      : undefined;

  const text = typeof detailRecord.text === 'string'
    ? detailRecord.text
    : typeof detailRecord.scripture === 'string'
      ? detailRecord.scripture
      : undefined;

  const version = typeof detailRecord.version === 'string'
    ? detailRecord.version
    : typeof detailRecord.translation === 'string'
      ? detailRecord.translation
      : typeof detailRecord.version_abbrev === 'string'
        ? detailRecord.version_abbrev
        : undefined;

  if (!reference || !text) {
    return null;
  }

  return {
    reference: reference.trim(),
    text: text.trim(),
    version: version?.trim() || undefined,
  };
}

export async function fetchDailyVerse({ signal }: { signal?: AbortSignal } = {}): Promise<DailyVerseResult> {
  try {
    const response = await fetch(DAILY_VERSE_API, {
      signal,
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Daily verse request failed with status ${response.status}`);
    }

    const data = await response.json();
    const verse = normaliseApiResponse(data);

    if (!verse) {
      throw new Error('Daily verse response was in an unexpected format.');
    }

    return {
      verse,
      source: 'api',
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unable to fetch daily verse from API.';

    return {
      verse: { ...FALLBACK_VERSE },
      source: 'fallback',
      errorMessage,
    };
  }
}
