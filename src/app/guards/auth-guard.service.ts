import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const expectedRole = next.data.expectedRole;
    const expectedType = next.data.expectedType;
    console.log(expectedRole, this.authService.getTipo());

    if (!this.authService.isAuthenticated
      || (expectedType && this.authService.getTipo() !== expectedType)) {
      this.router.navigate(['/bienvenido']);
      return false;
    }

    return true;
  }

}
