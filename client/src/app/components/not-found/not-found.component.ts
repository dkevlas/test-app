import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
  private readonly router: Router = inject(Router);

  goHome() {
    this.router.navigate(['/']);
  }
}
