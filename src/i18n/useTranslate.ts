"use client";

import { useCallback, useRef } from "react";
import { useI18n } from "./I18nProvider";

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

export function useTranslate() {
  const { locale } = useI18n();
  const pendingRef = useRef<Map<string, Promise<string>>>(new Map());

  const translate = useCallback(
    async (text: string): Promise<string> => {
      if (locale === "id" || !text.trim()) return text;

      const cached = getCached(text, locale);
      if (cached) return cached;

      const cacheKey = getCacheKey(text, locale);
      const pending = pendingRef.current.get(cacheKey);
      if (pending) return pending;

      const promise = (async () => {
        try {
          const res = await fetch("/api/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, targetLang: locale, sourceLang: "id" }),
          });
          const data = await res.json();
          const translated = data.translated || text;
          setCache(text, locale, translated);
          return translated;
        } catch {
          return text;
        }
      })();

      pendingRef.current.set(cacheKey, promise);
      const result = await promise;
      pendingRef.current.delete(cacheKey);
      return result;
    },
    [locale]
  );

  return { translate, isIdLang: locale === "id" };
}
