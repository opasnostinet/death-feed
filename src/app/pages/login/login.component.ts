import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

const errorList: Record<string, string> = {
  'required': 'The field is required',
  'maxlength': 'Too many characters',
  'email': 'Invalid email',
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public hide: boolean = true;
  public form: FormGroup;

  constructor(
    private _authService: AuthService,
  ) {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    });
  }

  public login(event: SubmitEvent): void {
    this._authService.login(this.form.value.login, this.form.value.password);
  }

  public getError(controlName: string): string {
    const control = this.form.controls[controlName];
    
    if (control.errors) {
      const firstErrorName = Object.keys(control?.errors)[0];
      const resultError = errorList[firstErrorName];

      return resultError;
    }
    return '';
  }
}
