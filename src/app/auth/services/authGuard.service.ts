import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable, map } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService, private router: Router){}

    canActivate(): Observable<boolean>{
        console.log('AuthGuardService: Evaluando Acceso', this.authService.isLogged$);
        
        return this.authService.isLogged$.pipe(
            //take(1),
            map((isLoggedIn) => {
                console.log('AuthGuardService: Valor emitido', isLoggedIn);
                if(isLoggedIn){
                    return true;
                } 
                console.log('AuthGuardService: Valor falso emitido', isLoggedIn);
                this.router.navigateByUrl('/');
                return false;
            })
        );
    }
}