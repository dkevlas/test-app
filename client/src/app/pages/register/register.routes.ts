import { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./register.component').then(m => m.RegisterComponent)
    },
    {
        path: '**',
        loadComponent: () => import('../../components/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
]

export default routes;
