"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

type Locale = "en" | "id";
type NestedKeyOf<T> = T extends object
  ? { [K in keyof T]: K extends string ? `${K}${T[K] extends object ? `.${NestedKeyOf<T[K]>}` : ""}` : never }[keyof T]
  : never;

import { en } from "./en";
import { id } from "./id";

const translations = { en, id } as const;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

function resolvePath(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");

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
    (path: string): string => resolvePath(translations[locale] as unknown as Record<string, unknown>, path),
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, toggleLocale }}>
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
