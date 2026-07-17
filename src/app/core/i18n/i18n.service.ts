import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

import { Language, TRANSLATIONS, TranslationKey } from './translations';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'la-vie-en-rose-language';

  readonly language = signal<Language>(this.getInitialLanguage());

  constructor() {
    effect(() => {
      const language = this.language();
      this.document.documentElement.lang = language;
      this.updateDescription(language);

      try {
        localStorage.setItem(this.storageKey, language);
      } catch {
        // The selected language still works when storage is unavailable.
      }
    });
  }

  t(key: TranslationKey): string {
    return TRANSLATIONS[this.language()][key];
  }

  setLanguage(language: Language): void {
    this.language.set(language);
  }

  private getInitialLanguage(): Language {
    try {
      const storedLanguage = localStorage.getItem(this.storageKey);
      if (storedLanguage === 'en' || storedLanguage === 'bg') {
        return storedLanguage;
      }
    } catch {
      // Fall back to the browser language when storage is unavailable.
    }

    return navigator.language.toLowerCase().startsWith('bg') ? 'bg' : 'en';
  }

  private updateDescription(language: Language): void {
    const description = this.document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute('content', TRANSLATIONS[language]['meta.site.description']);
  }
}
