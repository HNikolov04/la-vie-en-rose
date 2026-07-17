import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal
} from '@angular/core';

import { I18nService } from '../../core/i18n/i18n.service';
import { TranslationKey } from '../../core/i18n/translations';

interface GalleryItem {
  labelKey: TranslationKey;
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
  protected readonly selectedImage = signal<GalleryItem | null>(null);

  protected readonly galleryItems: GalleryItem[] = [
    {
      labelKey: 'gallery.item.blackFrench',
      src: 'assets/images/services/pink-black-french-manicure.png'
    },
    {
      labelKey: 'gallery.item.autumn',
      src: 'assets/images/services/autumn-nail-art.png'
    },
    {
      labelKey: 'gallery.item.bow',
      src: 'assets/images/services/pink-bow-nail-art.png'
    },
    {
      labelKey: 'gallery.item.red',
      src: 'assets/images/services/red-floral-manicure.png'
    },
    {
      labelKey: 'gallery.item.french',
      src: 'assets/images/services/soft-pink-french-manicure.png'
    },
    {
      labelKey: 'gallery.item.threeDimensional',
      src: 'assets/images/services/pink-3d-nail-art.png'
    }
  ];

  protected openImage(image: GalleryItem): void {
    this.selectedImage.set(image);
  }

  protected closeImage(): void {
    this.selectedImage.set(null);
  }

  @HostListener('document:keydown.escape')
  protected closeImageOnEscape(): void {
    this.closeImage();
  }
}
