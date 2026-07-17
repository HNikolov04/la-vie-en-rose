import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Gallery {
  protected readonly galleryItems = [
    { label: 'Blush minimal', className: 'tall' },
    { label: 'Rose chrome', className: 'standard' },
    { label: 'Soft french', className: 'wide' },
    { label: 'Tiny details', className: 'standard' },
    { label: 'Cherry red', className: 'tall' },
    { label: 'Clean nude', className: 'standard' },
    { label: 'Pink aura', className: 'wide' },
    { label: 'Pearl finish', className: 'standard' }
  ];
}
