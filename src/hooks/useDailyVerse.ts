import { useEffect, useMemo, useState } from 'react';
import { DailyVerse, DailyVerseResult, DailyVerseSource, fetchDailyVerse } from '../services/bibleVerseService';

const STORAGE_KEY = 'ccc.dailyVerse';
const FALLBACK_MESSAGE = "We're sharing a cherished passage while today's verse becomes available.";

type VerseStatus = 'idle' | 'loading' | 'success' | 'error';

interface StoredDailyVerse {
  date: string;
  verse: DailyVerse;
  source: DailyVerseSource;
  message?: string | null;
}

interface DailyVerseState {
  verse: DailyVerse | null;
  source: DailyVerseSource | null;
  status: VerseStatus;
  message: string | null;
}

const initialState: DailyVerseState = {
  verse: null,
  source: null,
  status: 'idle',
  message: null,
};

function readStoredVerse(): StoredDailyVerse | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as StoredDailyVerse;
  } catch (error) {
    console.warn('Unable to parse cached daily verse.', error);
    return null;
  }
}

function persistVerse(date: string, result: DailyVerseResult, message: string | null) {
  if (typeof window === 'undefined') {
    return;
  }

  const payload: StoredDailyVerse = {
    date,
    verse: result.verse,
    source: result.source,
    message,
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn('Unable to cache daily verse.', error);
  }
}

export function useDailyVerse() {
  const [state, setState] = useState<DailyVerseState>(initialState);

  useEffect(() => {
    let isActive = true;
    const today = new Date().toISOString().slice(0, 10);

    const cached = readStoredVerse();
    if (cached && cached.date === today) {
      setState({
        verse: cached.verse,
        source: cached.source,
        status: 'success',
        message: cached.message ?? (cached.source === 'fallback' ? FALLBACK_MESSAGE : null),
      });
      return undefined;
    }

    const controller = new AbortController();

    setState((current) => ({
      ...current,
      status: 'loading',
      message: null,
    }));

    async function loadVerse() {
      try {
        const result = await fetchDailyVerse({ signal: controller.signal });
        if (!isActive) {
          return;
        }

        const message = result.source === 'fallback' ? result.errorMessage ?? FALLBACK_MESSAGE : null;
        setState({
          verse: result.verse,
          source: result.source,
          status: 'success',
          message,
        });
        persistVerse(today, result, message);
      } catch (error) {
        if (!isActive) {
          return;
        }

        setState({
          verse: null,
          source: null,
          status: 'error',
          message: 'We were not able to load today\'s verse. Please try again soon.',
        });
      }
    }

    loadVerse();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, []);

  const isLoading = state.status === 'loading' && !state.verse;
  const isFetching = state.status === 'loading';
  const isError = state.status === 'error';

  return useMemo(
    () => ({
      verse: state.verse,
      source: state.source,
      message: state.message,
      isLoading,
      isFetching,
      isError,
    }),
    [state.verse, state.source, state.message, isLoading, isFetching, isError],
  );
}

export type UseDailyVerseReturn = ReturnType<typeof useDailyVerse>;
