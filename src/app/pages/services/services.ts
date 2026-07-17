import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceGroup {
  title: string;
  icon: string;
  description: string;
  items: Array<{ name: string; detail: string; price: string }>;
}

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Services {
  protected readonly serviceGroups: ServiceGroup[] = [
    {
      title: 'Natural Nail Care',
      icon: 'spa',
      description: 'Essential care for beautifully shaped, healthy natural nails.',
      items: [
        { name: 'Classic Manicure', detail: 'Shape, cuticle care, polish', price: '€28' },
        { name: 'Rose Ritual', detail: 'Manicure, scrub, mask, massage', price: '€42' },
        { name: 'Polish Refresh', detail: 'Shape and classic polish', price: '€20' }
      ]
    },
    {
      title: 'Gel & BIAB',
      icon: 'auto_awesome',
      description: 'Glossy, durable colour and strength with a refined finish.',
      items: [
        { name: 'Gel Manicure', detail: 'Full prep and gel colour', price: '€38' },
        { name: 'BIAB Overlay', detail: 'Builder base and gel colour', price: '€48' },
        { name: 'Gel Removal', detail: 'Gentle removal and nail care', price: '€15' }
      ]
    },
    {
      title: 'Art & Extras',
      icon: 'palette',
      description: 'Personal details to make your manicure feel completely yours.',
      items: [
        { name: 'Minimal Art', detail: 'Fine lines, dots, chrome accents', price: '+ €8' },
        { name: 'Detailed Art', detail: 'Custom design consultation', price: '+ €15' },
        { name: 'French Finish', detail: 'Classic or colourful tips', price: '+ €7' }
      ]
    },
    {
      title: 'Pedicures',
      icon: 'self_care',
      description: 'Restorative foot care with a polished final touch.',
      items: [
        { name: 'Classic Pedicure', detail: 'Full care and classic polish', price: '€38' },
        { name: 'Gel Pedicure', detail: 'Full care and gel colour', price: '€48' },
        { name: 'Rose Spa Pedicure', detail: 'Extended ritual and gel colour', price: '€62' }
      ]
    }
  ];
}
