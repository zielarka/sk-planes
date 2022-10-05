import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userData:any;

  constructor(private fireAuth: AngularFireAuth) {}

  login(credencials: { email: string; password: string }) {
    return this.fireAuth.signInWithEmailAndPassword(
      credencials.email,
      credencials.password
    ).then(userCredencial => this.userData = userCredencial.user);
  }

  register(credencials: { email: string; password: string }) {
    return this.fireAuth.createUserWithEmailAndPassword(credencials.email, credencials.password)
  }

  logout() {
    return this.fireAuth.signOut();
  }

  isLoggedIn() {
    return !!this.userData
  }

  get user() {
    return this.userData;
  }
}
