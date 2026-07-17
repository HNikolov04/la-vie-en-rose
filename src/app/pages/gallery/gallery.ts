import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18nService } from '../../core/i18n/i18n.service';
import { TranslationKey } from '../../core/i18n/translations';

interface GalleryItem {
  labelKey: TranslationKey;
  className: string;
  src: string;
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
    {
      labelKey: 'gallery.item.blackFrench',
      className: 'tall',
      src: 'assets/images/services/pink-black-french-manicure.png'
    },
    {
      labelKey: 'gallery.item.autumn',
      className: 'standard',
      src: 'assets/images/services/autumn-nail-art.png'
    },
    {
      labelKey: 'gallery.item.bow',
      className: 'wide',
      src: 'assets/images/services/pink-bow-nail-art.png'
    },
    {
      labelKey: 'gallery.item.red',
      className: 'standard',
      src: 'assets/images/services/red-floral-manicure.png'
    },
    {
      labelKey: 'gallery.item.french',
      className: 'tall',
      src: 'assets/images/services/soft-pink-french-manicure.png'
    },
    {
      labelKey: 'gallery.item.threeDimensional',
      className: 'standard',
      src: 'assets/images/services/pink-3d-nail-art.png'
    }
  ];
}
