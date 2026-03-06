'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import hkFlag from '@/assets/icons/flags/flag-hk.png';
import koreaFlag from '@/assets/icons/flags/flag-korea.png';
import chinaFlag from '@/assets/icons/flags/flag-china.png';
import enFlag from '@/assets/icons/flags/flag-en.png';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

export type Language = 'ko' | 'en' | 'sc' | 'tc';

const languages: { code: Language; label: string; flag: typeof koreaFlag }[] = [
  { code: 'ko', label: '한국어', flag: koreaFlag },
  { code: 'en', label: 'English', flag: enFlag },
  { code: 'sc', label: '中文(简体)', flag: chinaFlag },
  { code: 'tc', label: '中文(繁體)', flag: hkFlag },
];

export function LanguageSelector() {
  const locale = useLocale() as Language;
  const router = useRouter();
  const pathname = usePathname();

  const selected = languages.find((l) => l.code === locale) ?? languages[0];

  const handleSelect = (code: Locale) => {
    router.replace(pathname, { locale: code });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-1.5 px-2 py-1 rounded-full text-[#1e2b39]/60 hover:text-[#1e2b39] transition-colors outline-none hover:bg-black/5">
          <Image
            src={selected.flag}
            alt={selected.label}
            width={24}
            height={16}
            className="w-6 h-4 object-cover rounded-[2px] shadow-sm border border-black/10"
          />
          <ChevronDown className="w-3 h-3 opacity-50" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[120px] bg-white rounded-lg shadow-lg border border-black/5 p-1 animate-in fade-in zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
          sideOffset={5}
        >
          {languages.map((lang) => (
            <DropdownMenu.Item
              key={lang.code}
              className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium outline-none cursor-pointer hover:bg-black/5 rounded-md select-none transition-colors"
              onSelect={() => handleSelect(lang.code)}
            >
              <Image
                src={lang.flag}
                alt={lang.label}
                width={20}
                height={14}
                className="w-5 h-3.5 object-cover rounded-[1px] shadow-sm border border-black/10"
              />
              <span className={selected.code === lang.code ? 'text-[#1e2b39]' : 'text-[#1e2b39]/70'}>
                {lang.label}
              </span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
