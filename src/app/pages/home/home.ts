import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';
import { TranslationKey } from '../../core/i18n/translations';

interface FeaturedService {
  icon: string;
  nameKey: TranslationKey;
  descriptionKey: TranslationKey;
  priceKey: TranslationKey;
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

  protected readonly services: FeaturedService[] = [
    {
      icon: 'auto_awesome',
      nameKey: 'home.services.signature.name',
      descriptionKey: 'home.services.signature.description',
      priceKey: 'home.services.signature.price'
    },
    {
      icon: 'draw',
      nameKey: 'home.services.gel.name',
      descriptionKey: 'home.services.gel.description',
      priceKey: 'home.services.gel.price'
    },
    {
      icon: 'architecture',
      nameKey: 'home.services.art.name',
      descriptionKey: 'home.services.art.description',
      priceKey: 'home.services.art.price'
    }
  ];
}
