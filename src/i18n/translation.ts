import config from "@shConfig";
import type I18nKey from "./i18nKey";

// 匯入各語言的翻譯檔
import { en } from "./languages/en.ts";
import { zh_TW } from "./languages/zh_TW.ts";

export type Translation = {
  [K in I18nKey]: string;
};

const defaultTranslation = zh_TW;

const map: { [key: string]: Translation } = {
  // 建立語言代碼與翻譯檔的對應關係
  en: en,
  zh_tw: zh_TW,
};

export const supportedLanguages = Object.keys(map);

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation;
}

export default function i18n(key: I18nKey): string {
  const lang = config.siteLang || "zh_TW";
  return getTranslation(lang)[key];
}
