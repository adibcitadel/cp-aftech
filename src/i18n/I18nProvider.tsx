"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";

type Locale = "en" | "id";

import { en } from "./en";
import { id } from "./id";
import type { TranslationSchema } from "./id";

const translations: Record<Locale, TranslationSchema> = { en, id } as const;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  toggleLocale: () => void;
  translateContent: (text: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

function resolvePath(obj: TranslationSchema, path: string): string {
  const keys = path.split(".");
  let current: TranslationSchema | string = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as TranslationSchema)[key];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

const CACHE_PREFIX = "aftech-trans-";

function getCacheKey(text: string, targetLang: string): string {
  return `${CACHE_PREFIX}${targetLang}:${text}`;
}

function getCached(text: string, targetLang: string): string | null {
  try {
    return localStorage.getItem(getCacheKey(text, targetLang));
  } catch {
    return null;
  }
}

function setCache(text: string, targetLang: string, translated: string) {
  try {
    localStorage.setItem(getCacheKey(text, targetLang), translated);
  } catch {}
}

async function fetchTranslation(text: string, targetLang: string): Promise<string> {
  const cached = getCached(text, targetLang);
  if (cached) return cached;

  try {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, targetLang, sourceLang: "en" }),
    });
    const data = await res.json();
    const translated = data.translated || text;
    setCache(text, targetLang, translated);
    return translated;
  } catch {
    return text;
  }
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");
  const [translatedTexts, setTranslatedTexts] = useState<Record<string, string>>({});
  const pendingRef = useRef<Map<string, Promise<string>>>(new Map());

  useEffect(() => {
    const stored = localStorage.getItem("aftech-locale") as Locale | null;
    if (stored === "en" || stored === "id") setLocaleState(stored);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("aftech-locale", l);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "id" ? "en" : "id");
  }, [locale, setLocale]);

  const t = useCallback(
    (path: string): string => resolvePath(translations[locale], path),
    [locale]
  );

  const translateContent = useCallback(
    (text: string): string => {
      if (locale === "en" || !text.trim()) return text;
      if (translatedTexts[text]) return translatedTexts[text];

      const cached = getCached(text, locale);
      if (cached) {
        setTranslatedTexts((prev) => ({ ...prev, [text]: cached }));
        return cached;
      }

      const cacheKey = getCacheKey(text, locale);
      let promise = pendingRef.current.get(cacheKey);
      if (!promise) {
        promise = fetchTranslation(text, locale).then((result) => {
          if (result !== text) {
            setTranslatedTexts((prev) => ({ ...prev, [text]: result }));
          }
          return result;
        });
        pendingRef.current.set(cacheKey, promise);
      }

      return text;
    },
    [locale, translatedTexts]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, toggleLocale, translateContent }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export type { Locale };
