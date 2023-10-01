import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@app/core/services';
// import { KeycloakProfile, KeycloakRoles } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    public isLoggedIn = false;
    // public profileUser: KeycloakProfile | null = null;
    constructor(
        private auth: AuthService,
        private router: Router,
        private readonly keycloak: KeycloakService
    ) { }

    async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        this.isLoggedIn = await this.keycloak.isLoggedIn();
        let isSession = JSON.parse(localStorage.getItem('warehouse'))

        if (!this.isLoggedIn) {
            // this.router.navigate(['/']);
            window.location.reload();
            return false;
        }

        if (!isSession) {
            this.router.navigate(['/']);
            window.location.reload();
            return false;
        }

        return this.isLoggedIn
    }

}
