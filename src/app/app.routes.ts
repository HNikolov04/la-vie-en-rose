import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'La Vie en Rose | Nail Studio',
    loadComponent: () =>
      import('./pages/home/home').then((component) => component.Home)
  },
  {
    path: 'services',
    title: 'Services | La Vie en Rose',
    loadComponent: () =>
      import('./pages/services/services').then((component) => component.Services)
  },
  {
    path: 'gallery',
    title: 'Gallery | La Vie en Rose',
    loadComponent: () =>
      import('./pages/gallery/gallery').then((component) => component.Gallery)
  },
  {
    path: 'about',
    title: 'About | La Vie en Rose',
    loadComponent: () =>
      import('./pages/about/about').then((component) => component.About)
  },
  {
    path: 'contact',
    title: 'Contact | La Vie en Rose',
    loadComponent: () =>
      import('./pages/contact/contact').then((component) => component.Contact)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
