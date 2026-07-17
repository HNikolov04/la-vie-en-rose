import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';
import { TranslationKey } from '../../core/i18n/translations';

interface PricePreviewItem {
  nameKey: TranslationKey;
  price: string;
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

  protected readonly pricePreviewItems: PricePreviewItem[] = [
    { nameKey: 'services.gelManicure.name', price: '50 лв. / €25.50' },
    { nameKey: 'services.french.name', price: '55 лв. / €28' },
    { nameKey: 'services.biab.name', price: '60 лв. / €30.60' }
  ];
}
