import { defineRouting } from 'next-intl/routing';

export type Locale = 'ko' | 'en' | 'sc' | 'tc';

export const routing = defineRouting({
  locales: ['ko', 'en', 'sc', 'tc'] as Locale[],
  defaultLocale: 'ko' as Locale,
});
