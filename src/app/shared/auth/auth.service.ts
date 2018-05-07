import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map , throttle} from 'rxjs/operators';
 
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }
 
    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:4201/login', { email: username, password: password })
            .pipe(map(email => {
                // login successful if there's a jwt token in the response
                if (email && email.authToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(email));
                }
 
                return email;
            }));
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}