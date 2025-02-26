import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/products/products.routes'),
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.routes')
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/register/register.routes')
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
