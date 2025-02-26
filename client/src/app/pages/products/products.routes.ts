import { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./products.component').then(m => m.ProductsComponent)
    }
]

export default routes;
