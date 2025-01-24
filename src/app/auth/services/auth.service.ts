import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CurrentUserInterface } from "../types/currentUser.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { LoginRequestInterface } from "../types/loginRequest.interface";
import { SocketService } from "src/app/shared/services/socket.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser$ = new BehaviorSubject<CurrentUserInterface | null | undefined>(
        undefined
    );

    isLogged$ = this.currentUser$.pipe(
        filter((currentUser) => {
            console.log('AuthService: currentUser emitido:', currentUser);
            return currentUser !== undefined;
        }),
        map((currentUser) => {
            const isLogged = Boolean(currentUser);
            console.log('AuthService: isLogged calculado:', isLogged);
            return isLogged;
        })
    );

    constructor(private http: HttpClient, private socketService: SocketService){}

    getCurrentUser(): Observable<CurrentUserInterface>{
        const url = environment.apiUrl + "/user";
        return this.http.get<CurrentUserInterface>(url);
    }

    register(registerRequest: RegisterRequestInterface): Observable<CurrentUserInterface>{
        const url = environment.apiUrl + "/users";
        return this.http.post<CurrentUserInterface>(url, registerRequest);
    }

    login(loginRequest: LoginRequestInterface): Observable<CurrentUserInterface>{
        const url = environment.apiUrl + "/users/login";
        return this.http.post<CurrentUserInterface>(url, loginRequest);
    }

    setToken(currentUser: CurrentUserInterface): void {
        localStorage.setItem('token', currentUser.token);
    }

    setCurrentUser(currentUser: CurrentUserInterface | null) :void {
        this.currentUser$.next(currentUser);
    }

    logout(): void {
        localStorage.removeItem('token');
        this.currentUser$.next(null);
        this.socketService.disconnect();
    }
}