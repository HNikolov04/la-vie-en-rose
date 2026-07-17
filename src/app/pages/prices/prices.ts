import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18nService } from '../../core/i18n/i18n.service';
import { TranslationKey } from '../../core/i18n/translations';

interface PriceItem {
  nameKey: TranslationKey;
  detailKey: TranslationKey;
  price: string;
}

interface PriceCategory {
  titleKey: TranslationKey;
  items: PriceItem[];
}

@Component({
  selector: 'app-prices',
  templateUrl: './prices.html',
  styleUrl: './prices.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Prices {
  protected readonly i18n = inject(I18nService);

  protected readonly categories: PriceCategory[] = [
    {
      titleKey: 'prices.manicures',
      items: [
        {
          nameKey: 'services.gelManicure.name',
          detailKey: 'services.gelManicure.detail',
          price: '50 лв. / €25.50'
        },
        {
          nameKey: 'services.french.name',
          detailKey: 'services.french.detail',
          price: '55 лв. / €28'
        },
        {
          nameKey: 'services.biab.name',
          detailKey: 'services.biab.detail',
          price: '60 лв. / €30.60'
        },
        {
          nameKey: 'services.detailed.name',
          detailKey: 'services.detailed.detail',
          price: '80 лв. / €40.90'
        },
        {
          nameKey: 'services.removal.name',
          detailKey: 'services.removal.detail',
          price: '10 лв. / €5.10'
        }
      ]
    }
  ];
}
