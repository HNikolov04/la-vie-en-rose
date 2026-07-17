import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {
  protected readonly i18n = inject(I18nService);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly mapUrl = computed<SafeResourceUrl>(() => {
    const language = this.i18n.language();
    const query = language === 'bg'
      ? 'София, Младост 2, ул. Свети Киприян, бл. 249'
      : '249 St. Kipriyan Street, Mladost 2, Sofia, Bulgaria';
    const url = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed&hl=${language}`;

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });
}
