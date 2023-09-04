import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponseModel } from '@model/auth-response.model';
import { SigninModel } from '@model/signin.model';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { LOGIN_USER_URL, SIGNIN_USER_URL } from 'src/app/types/user.type';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // private authentificationSubject: BehaviorSubject<any>;
  // public authentification: Observable<AuthResponseModel>;

  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    // this.authentificationSubject = new BehaviorSubject<AuthResponseModel>(
    //   JSON.parse(localStorage.getItem('currentAuth') ?? "")
    // );
    // this.authentification = this.authentificationSubject.asObservable();
  }

  public sendAuthStateChangeNotification(isAuthenticated: boolean) {
    this.authChangeSub.next(isAuthenticated);
  }

  public login(username: string, password: string) : Observable<AuthResponseModel>{
    return this.http.post<AuthResponseModel>(LOGIN_USER_URL, {
      username: username,
      password: password
    });
  }

  // public get authentificationValue(): AuthentificationModel {
  //   return this.authentificationSubject.value;
  // }

  // login(username: string, password: string): Observable<AuthResponseModel>{
  //   return this.http.post<AuthResponseModel>(LOGIN_USER_URL, {
  //     username: username,
  //     password: password
  //   }).pipe(
  //     map(
  //       ({token}) => {
  //         let authentification: AuthResponseModel = {
  //           //email: username,
  //           token: token
  //         };
  //         localStorage.setItem('currentAuth', JSON.stringify(authentification));
  //         this.authentificationSubject.next(authentification);
  //         return authentification;
  //       }
  //     )
  //   )
  // }

  // logout(){
  //   localStorage.removeItem('currentAuth');
  //   this.authentificationSubject.next(null);
  // }

  register(signinModel: SigninModel): Observable<any>{
    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.post(SIGNIN_USER_URL, signinModel, {
      headers: headers
    } )
  }
}
