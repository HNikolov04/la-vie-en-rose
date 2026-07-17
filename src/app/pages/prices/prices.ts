import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';
import { TranslationKey } from '../../core/i18n/translations';

interface PriceItem {
  nameKey: TranslationKey;
  detailKey: TranslationKey;
  duration: number;
  price: string;
  included?: boolean;
}

interface PriceCategory {
  titleKey: TranslationKey;
  icon: string;
  items: PriceItem[];
}

@Component({
  selector: 'app-prices',
  imports: [RouterLink],
  templateUrl: './prices.html',
  styleUrl: './prices.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Prices {
  protected readonly i18n = inject(I18nService);

  protected readonly categories: PriceCategory[] = [
    {
      titleKey: 'prices.manicures',
      icon: 'spa',
      items: [
        {
          nameKey: 'services.classic.name',
          detailKey: 'services.classic.detail',
          duration: 45,
          price: '€28'
        },
        {
          nameKey: 'services.ritual.name',
          detailKey: 'services.ritual.detail',
          duration: 70,
          price: '€42'
        },
        {
          nameKey: 'services.refresh.name',
          detailKey: 'services.refresh.detail',
          duration: 30,
          price: '€20'
        }
      ]
    },
    {
      titleKey: 'prices.gelBiab',
      icon: 'auto_awesome',
      items: [
        {
          nameKey: 'services.gelManicure.name',
          detailKey: 'services.gelManicure.detail',
          duration: 60,
          price: '€38'
        },
        {
          nameKey: 'services.biab.name',
          detailKey: 'services.biab.detail',
          duration: 75,
          price: '€48'
        },
        {
          nameKey: 'services.removal.name',
          detailKey: 'services.removal.detail',
          duration: 30,
          price: '€15'
        }
      ]
    },
    {
      titleKey: 'prices.pedicures',
      icon: 'self_care',
      items: [
        {
          nameKey: 'services.classicPedi.name',
          detailKey: 'services.classicPedi.detail',
          duration: 60,
          price: '€38'
        },
        {
          nameKey: 'services.gelPedi.name',
          detailKey: 'services.gelPedi.detail',
          duration: 75,
          price: '€48'
        },
        {
          nameKey: 'services.spaPedi.name',
          detailKey: 'services.spaPedi.detail',
          duration: 90,
          price: '€62'
        }
      ]
    },
    {
      titleKey: 'prices.extras',
      icon: 'palette',
      items: [
        {
          nameKey: 'services.french.name',
          detailKey: 'services.french.detail',
          duration: 15,
          price: '+ €7'
        },
        {
          nameKey: 'services.minimal.name',
          detailKey: 'services.minimal.detail',
          duration: 20,
          price: '+ €8'
        },
        {
          nameKey: 'services.detailed.name',
          detailKey: 'services.detailed.detail',
          duration: 30,
          price: '+ €15'
        },
        {
          nameKey: 'prices.repair.name',
          detailKey: 'prices.repair.detail',
          duration: 15,
          price: '€5'
        },
        {
          nameKey: 'prices.consultation.name',
          detailKey: 'prices.consultation.detail',
          duration: 10,
          price: '',
          included: true
        }
      ]
    }
  ];
}
