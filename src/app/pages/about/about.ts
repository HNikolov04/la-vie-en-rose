import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';
import { TranslationKey } from '../../core/i18n/translations';

interface StudioValue {
  icon: string;
  titleKey: TranslationKey;
  copyKey: TranslationKey;
}

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {
  protected readonly i18n = inject(I18nService);

  protected readonly values: StudioValue[] = [
    {
      icon: 'favorite',
      titleKey: 'about.values.care.title',
      copyKey: 'about.values.care.copy'
    },
    {
      icon: 'interests',
      titleKey: 'about.values.personal.title',
      copyKey: 'about.values.personal.copy'
    },
    {
      icon: 'wb_sunny',
      titleKey: 'about.values.energy.title',
      copyKey: 'about.values.energy.copy'
    }
  ];

  protected readonly team: TeamMember[] = [
    { roleKey: 'about.team.founder' },
    { roleKey: 'about.team.senior' },
    { roleKey: 'about.team.artist' }
  ];
}
