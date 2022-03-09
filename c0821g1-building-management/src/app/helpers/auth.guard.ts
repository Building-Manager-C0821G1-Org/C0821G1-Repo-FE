import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorageService} from '../service/security/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private tokenStorageService: TokenStorageService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.tokenStorageService.getUser();
    // const roles: string[] = this.tokenStorageService.getUser().roles;
    if (user !== null) {
      // const role = route.data.roles[0];
      // const role = roles[0];
      // const role1 = roles[1];
      // console.log(role);
      // console.log(role1);
      const role = user.roles[0];
      if (!this.tokenStorageService.isAuthenticated() || route.data.expectedRole.indexOf(role) === -1) {
        this.router.navigate(['/security/access-denied']);
        return false;
      }
      return true;
    }else {
      this.router.navigate(['/security/access-denied']);
      return false;
    }
  }

}
