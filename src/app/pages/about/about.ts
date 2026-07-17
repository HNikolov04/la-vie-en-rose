import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {
  protected readonly values = [
    {
      icon: 'favorite',
      title: 'Care first',
      copy: 'Natural nail health and thoughtful technique guide every appointment.'
    },
    {
      icon: 'interests',
      title: 'Made personal',
      copy: 'Your shape, lifestyle, colour, and ideas are always part of the process.'
    },
    {
      icon: 'wb_sunny',
      title: 'Good energy',
      copy: 'A bright, welcoming studio where you can settle in and feel at ease.'
    }
  ];
}
