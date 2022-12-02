import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  public registerForm!: FormGroup;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }
  onRegister() {
    const formValues = this.registerForm.value;
    const isFormValid = this.registerForm.valid;
    if (isFormValid && formValues.password === formValues.confirmPassword) {
      this.authService.register(
        formValues.name,
        formValues.email,
        formValues.password
      );
      this.router.navigate(['/', 'module-home', 'home', 'popular']);
    } else {
      this.registerForm.reset();
    }
  }
}
