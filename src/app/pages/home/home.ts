import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  protected readonly services = [
    {
      icon: 'spa',
      name: 'Signature Manicure',
      description: 'Detailed nail and cuticle care, shaped and finished with your perfect colour.',
      price: 'from €28'
    },
    {
      icon: 'auto_awesome',
      name: 'Gel Perfection',
      description: 'Long-lasting colour with a glossy finish, designed around your everyday style.',
      price: 'from €38'
    },
    {
      icon: 'palette',
      name: 'Nail Art',
      description: 'Delicate details, playful accents, and custom art created one nail at a time.',
      price: 'from €8'
    }
  ];

  protected readonly testimonials = [
    {
      quote: 'The prettiest studio and the most careful manicure I have ever had.',
      name: 'Mia K.'
    },
    {
      quote: 'Every appointment feels calm, personal, and genuinely special.',
      name: 'Sophie A.'
    },
    {
      quote: 'Beautiful work that lasts. I already look forward to my next visit.',
      name: 'Elena R.'
    }
  ];
}
