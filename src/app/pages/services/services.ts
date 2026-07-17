import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';
import { TranslationKey } from '../../core/i18n/translations';

interface ServiceGroup {
  titleKey: TranslationKey;
  icon: string;
  image: string;
  imageAltKey: TranslationKey;
  descriptionKey: TranslationKey;
  items: Array<{ nameKey: TranslationKey; detailKey: TranslationKey; price: string }>;
}

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Services {
  protected readonly i18n = inject(I18nService);

  protected readonly serviceGroups: ServiceGroup[] = [
    {
      titleKey: 'services.natural.title',
      icon: 'spa',
      image: 'assets/images/services/soft-pink-french-manicure.png',
      imageAltKey: 'gallery.item.french',
      descriptionKey: 'services.natural.description',
      items: [
        { nameKey: 'services.gelManicure.name', detailKey: 'services.gelManicure.detail', price: '50 лв. / €25.50' },
        { nameKey: 'services.french.name', detailKey: 'services.french.detail', price: '55 лв. / €28' }
      ]
    },
    {
      titleKey: 'services.gel.title',
      icon: 'auto_awesome',
      image: 'assets/images/services/pink-3d-nail-art.png',
      imageAltKey: 'gallery.item.threeDimensional',
      descriptionKey: 'services.gel.description',
      items: [
        { nameKey: 'services.biab.name', detailKey: 'services.biab.detail', price: '60 лв. / €30.60' },
        { nameKey: 'services.detailed.name', detailKey: 'services.detailed.detail', price: '80 лв. / €40.90' },
        { nameKey: 'services.removal.name', detailKey: 'services.removal.detail', price: '10 лв. / €5.10' }
      ]
    }
  ];
}
