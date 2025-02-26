import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email',
  imports: [ReactiveFormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {
  
  messageErrorApi: string | null = null;

  private readonly _formBuilder: FormBuilder = inject(FormBuilder);
  private readonly _emailService: EmailService = inject(EmailService);
  private readonly _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input() openModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() sendEmailValid = new EventEmitter<void>();

  
  myForm = this._formBuilder.group({
    email: ['', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ]],
  })

  verifyEmail(controlName: 'email'): boolean {
    return this.myForm.controls[controlName].touched && this.myForm.controls[controlName].invalid
  }

  messageError(controlName: string): string | null {
    const control = this.myForm.get(controlName);
    if(!control) return null;
    if(control.hasError('required'))return "El campo es requerido";
    if(control.hasError('email'))return "El email no es válido";
    if(control.hasError('pattern'))return "El email no es válido";
    return null;
  }
  cancel(){
    this.closeModal.emit();
    document.body.style.overflow = "auto";
  }

  sendEmail(){
    if(!this.myForm.valid){
      this.myForm.markAllAsTouched();
      return;
    }
    if(this.myForm.value.email){
      this._emailService.sendEmail(this.myForm.value.email).subscribe({
        next: (res) => {
          this.sendEmailValid.emit();
        },
        error: (err) => {
          this.messageErrorApi = err.error.message;
          this._cdr.detectChanges();
        }
      })
    }
  }
}
