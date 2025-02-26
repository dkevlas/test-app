import { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./login.component').then(m => m.LoginComponent)
    },
    {
        path: '**',
        loadComponent: () => import('../../components/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
]

export default routes;
