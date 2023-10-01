import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SnackBarService } from '@app/core/services';
import { SessionConstant } from '@app/modules/app/pos-sessions/constants/session.constant';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class SessionGuard implements CanActivate {
	constructor(
		private router: Router,
		private snackBarService: SnackBarService,
	) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		let isSession = JSON.parse(localStorage.getItem('warehouse'))

		if (!isSession) {
			this.snackBarService.warn(SessionConstant.SESSION_SELECT_ERROR_MESSAGE)
			this.router.navigate(['/']);
			return false;
		}
		return true;
	}
}
