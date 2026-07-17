import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';
import { TranslationKey } from '../../core/i18n/translations';

interface ServiceGroup {
  titleKey: TranslationKey;
  icon: string;
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
      descriptionKey: 'services.natural.description',
      items: [
        { nameKey: 'services.classic.name', detailKey: 'services.classic.detail', price: '€28' },
        { nameKey: 'services.ritual.name', detailKey: 'services.ritual.detail', price: '€42' },
        { nameKey: 'services.refresh.name', detailKey: 'services.refresh.detail', price: '€20' }
      ]
    },
    {
      titleKey: 'services.gel.title',
      icon: 'auto_awesome',
      descriptionKey: 'services.gel.description',
      items: [
        { nameKey: 'services.gelManicure.name', detailKey: 'services.gelManicure.detail', price: '€38' },
        { nameKey: 'services.biab.name', detailKey: 'services.biab.detail', price: '€48' },
        { nameKey: 'services.removal.name', detailKey: 'services.removal.detail', price: '€15' }
      ]
    },
    {
      titleKey: 'services.art.title',
      icon: 'palette',
      descriptionKey: 'services.art.description',
      items: [
        { nameKey: 'services.minimal.name', detailKey: 'services.minimal.detail', price: '+ €8' },
        { nameKey: 'services.detailed.name', detailKey: 'services.detailed.detail', price: '+ €15' },
        { nameKey: 'services.french.name', detailKey: 'services.french.detail', price: '+ €7' }
      ]
    },
    {
      titleKey: 'services.pedicures.title',
      icon: 'self_care',
      descriptionKey: 'services.pedicures.description',
      items: [
        { nameKey: 'services.classicPedi.name', detailKey: 'services.classicPedi.detail', price: '€38' },
        { nameKey: 'services.gelPedi.name', detailKey: 'services.gelPedi.detail', price: '€48' },
        { nameKey: 'services.spaPedi.name', detailKey: 'services.spaPedi.detail', price: '€62' }
      ]
    }
  ];
}
