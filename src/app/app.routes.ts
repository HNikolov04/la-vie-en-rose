import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: { titleKey: 'meta.home.title' },
    loadComponent: () =>
      import('./pages/home/home').then((component) => component.Home)
  },
  {
    path: 'services',
    data: { titleKey: 'meta.services.title' },
    loadComponent: () =>
      import('./pages/services/services').then((component) => component.Services)
  },
  {
    path: 'prices',
    data: { titleKey: 'meta.prices.title' },
    loadComponent: () =>
      import('./pages/prices/prices').then((component) => component.Prices)
  },
  {
    path: 'gallery',
    data: { titleKey: 'meta.gallery.title' },
    loadComponent: () =>
      import('./pages/gallery/gallery').then((component) => component.Gallery)
  },
  {
    path: 'about',
    data: { titleKey: 'meta.about.title' },
    loadComponent: () =>
      import('./pages/about/about').then((component) => component.About)
  },
  {
    path: 'contact',
    data: { titleKey: 'meta.contact.title' },
    loadComponent: () =>
      import('./pages/contact/contact').then((component) => component.Contact)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
