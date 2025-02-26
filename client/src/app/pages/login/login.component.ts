import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILogin } from '../../interfaces/IUser';
import { AuthService } from '../../services/auth.service';
import { HanlderError } from '../../libs/HandlerError';
import { Router, RouterLink } from '@angular/router';
import { IDataUser, IResult } from '../../interfaces/IResult';
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    ModalComponent
],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  messageErrorApi: IResult<IDataUser> | null = null

  private readonly _formBUilder: FormBuilder = inject(FormBuilder);
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  myForm: FormGroup = this._formBUilder.group({
    email: ['', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern('^[a-zA-Z0-9.\-\_]+$')
    ]]
  })

  submit() {
    console.log(this.myForm.value);
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this._authService.loginAsync(this.myForm.value as ILogin).subscribe({
      next: result => {
        console.log(result);
        this.messageErrorApi = result;
        this._router.navigateByUrl('/', { skipLocationChange: true}).then(()=> {
          this._router.navigate([decodeURI(this._router.url)]);
        })
        this.myForm.reset();
      },
      error: error => {
        const err = HanlderError(error);
        console.log(err);
        this.messageErrorApi = err;
        return;
      }
    })
    
  }

  verifyField(controlName: string): boolean {
    return this.myForm.controls[controlName].touched && this.myForm.controls[controlName].invalid
  }

  messageError(controlName: string): string | null {
    const control = this.myForm.get(controlName);
    if (!control) return null;
    if (control.hasError('required')) return 'Este campo es obligatorio';
    if (control.hasError('email')) return 'Correo electrónico no válido';
    if (control.hasError('pattern')) return 'Caracteres no válidos';
    if (control.hasError('minlength')) return 'La contraseña debe tener al menos 8 caracteres';
    if (control.hasError('maxlength')) return 'La contraseña debe tener como máximo 16 caracteres';
    return null;
  }

}
