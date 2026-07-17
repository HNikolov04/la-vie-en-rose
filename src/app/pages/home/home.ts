import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';
import { TranslationKey } from '../../core/i18n/translations';

interface DiscoverCard {
  icon: string;
  titleKey: TranslationKey;
  copyKey: TranslationKey;
  route: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  protected readonly i18n = inject(I18nService);

  protected readonly discoverCards: DiscoverCard[] = [
    {
      icon: 'photo_library',
      titleKey: 'home.discover.gallery.title',
      copyKey: 'home.discover.gallery.copy',
      route: '/gallery'
    },
    {
      icon: 'receipt_long',
      titleKey: 'home.discover.prices.title',
      copyKey: 'home.discover.prices.copy',
      route: '/prices'
    },
    {
      icon: 'favorite',
      titleKey: 'home.discover.about.title',
      copyKey: 'home.discover.about.copy',
      route: '/about'
    }
  ];
}
