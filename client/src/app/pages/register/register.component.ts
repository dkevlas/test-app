import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IRegister } from '../../interfaces/IUser';
import { HanlderError } from '../../libs/HandlerError';
import { IDataUser, IResult } from '../../interfaces/IResult';
import { RouterLink } from '@angular/router';
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    ModalComponent
],
  templateUrl: './register.component.html',
})
export class RegisterComponent {

    openModal: boolean = false;
    messageModal: string = '';

    messageErrorApi: IResult<IDataUser> | null = null

    private readonly _formBUilder: FormBuilder = inject(FormBuilder);
    private readonly _authService: AuthService = inject(AuthService);
  
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
      ]],
      name: ['', [
        Validators.required,
        Validators.pattern(/^(?!\s)(?!.*\s{3,})[a-zA-Z\s]+(?<=\S)$/)
      ]],
    })
  
    submit() {
      if (!this.myForm.valid) {
        this.myForm.markAllAsTouched();
        return;
      }
      this._authService.registerAysnc(this.myForm.value as IRegister).subscribe({
        next: result => {
          this.myForm.reset();
          this.messageErrorApi = result;
          this.openModal = true;
          this.messageModal = this.messageErrorApi.message;
        },
        error: error => {
          const err = HanlderError(error);
          this.messageErrorApi = err;
        }
      })
    }
    closeModal(){
      this.openModal = false;
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
