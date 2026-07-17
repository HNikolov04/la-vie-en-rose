import { effect, inject, Injectable, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { I18nService } from './i18n.service';
import { TranslationKey } from './translations';

@Injectable()
export class I18nTitleStrategy extends TitleStrategy {
  private readonly documentTitle = inject(Title);
  private readonly i18n = inject(I18nService);
  private readonly titleKey = signal<TranslationKey>('meta.home.title');

  constructor() {
    super();
    effect(() => this.documentTitle.setTitle(this.i18n.t(this.titleKey())));
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    let route = snapshot.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const titleKey = route.data['titleKey'] as TranslationKey | undefined;
    this.titleKey.set(titleKey ?? 'meta.home.title');
  }
}
