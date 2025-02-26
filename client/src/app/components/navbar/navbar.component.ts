import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { IDataUser, IResult } from '../../interfaces/IResult';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  isAuth: IResult<IDataUser> | null = null;

  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  messageAction: string = '';

  constructor(){
    this.verifyToken();
  }

  verifyToken() {
    this._authService.verifyTokenAsync().subscribe({
      next: result => {
        this.messageAction = "Cerrar sesión";
        this.isAuth = result;
      },
      error: () => {
        this.messageAction = "Iniciar sesión";
      }
    })
  }

  logout() {
    this._authService.logoutAsync().subscribe({
      next: () => {
        window.location.reload();
      }
    })
  }

  goLogin() {
    this._router.navigate(['/login']);
  }

  goHome() {
    this._router.navigate(['/']);
  }
}
