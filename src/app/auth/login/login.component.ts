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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      const isValidUser = this.authService.login(email, password);
      if (isValidUser) {
        this.router.navigate(['/', 'module-home', 'home', 'popular']);
      } else {
        this.loginForm.reset();
        console.error('El usuario no existe');
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
