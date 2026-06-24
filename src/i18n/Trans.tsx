"use client";

import React, { useState, useEffect } from "react";
import { useI18n } from "./I18nProvider";

export function Trans({ children, as: Tag = "span" }: { children: string; as?: React.ElementType }) {
  const { locale, translateContent } = useI18n();
  const [translated, setTranslated] = useState(children);

  useEffect(() => {
    if (locale === "en") {
      setTranslated(children);
      return;
    }

    const result = translateContent(children);
    if (result !== translated) {
      setTranslated(result);
    }
  }, [children, locale, translateContent]);

  return <Tag>{translated}</Tag>;
}

export function useAutoTranslate() {
  const { locale, translateContent } = useI18n();
  const [texts, setTexts] = useState<Record<string, string>>({});

  const autoTranslate = (text: string): string => {
    if (locale === "en" || !text.trim()) return text;
    if (texts[text]) return texts[text];

    const result = translateContent(text);
    if (result !== text) {
      setTexts((prev) => ({ ...prev, [text]: result }));
    }
    return text;
  };

  return { autoTranslate, isId: locale === "id" };
}
