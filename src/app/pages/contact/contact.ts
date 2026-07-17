import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {
  protected readonly i18n = inject(I18nService);
}
