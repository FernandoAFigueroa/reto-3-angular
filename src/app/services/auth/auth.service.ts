import { Injectable } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { USERS } from 'src/app/mockdata';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: UserInterface[] = USERS;

  constructor() {}

  login(email: string, password: string): boolean {
    const isUserFound = this.users.find(
      (user) => user?.email === email && user?.password === password
    );
    if (isUserFound) {
      localStorage.setItem('isLogged', JSON.stringify(isUserFound));
      return true;
    } else {
      localStorage.clear();
      return false;
    }
  }

  register(name: string, email: string, password: string): void {
    const lastUser = this.users[this.users.length - 1];
    const newUser = { name, email, password, id: lastUser.id + 1 };
    this.users = [...this.users, newUser];
    localStorage.setItem('isLogged', JSON.stringify(newUser));
  }

  logout() {
    localStorage.clear();
  }
}
