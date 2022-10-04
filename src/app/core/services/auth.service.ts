import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth) {}

  login(credencials: { email: string; password: string }) {
    return this.fireAuth.signInWithEmailAndPassword(
      credencials.email,
      credencials.password
    );
  }
}
