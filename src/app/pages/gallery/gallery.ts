import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18nService } from '../../core/i18n/i18n.service';
import { TranslationKey } from '../../core/i18n/translations';

interface GalleryItem {
  labelKey: TranslationKey;
  className: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Gallery {
  protected readonly i18n = inject(I18nService);

  protected readonly galleryItems: GalleryItem[] = [
    { labelKey: 'gallery.item.blush', className: 'tall' },
    { labelKey: 'gallery.item.chrome', className: 'standard' },
    { labelKey: 'gallery.item.french', className: 'wide' },
    { labelKey: 'gallery.item.details', className: 'standard' },
    { labelKey: 'gallery.item.red', className: 'tall' },
    { labelKey: 'gallery.item.nude', className: 'standard' },
    { labelKey: 'gallery.item.aura', className: 'wide' },
    { labelKey: 'gallery.item.pearl', className: 'standard' }
  ];
}
