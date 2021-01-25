import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _baseUrl = 'http://101.53.155.156/auth/login';


  constructor(private http: HttpClient) { }
 
  public cuurentUser()  {
    return localStorage.getItem('currentUser');

  }
  public getToken()  {
    return localStorage.getItem('token');

  }
  addUser(data: any) {
    console.log('1');
    return this.http.post<any>(this._baseUrl, data);
  }
}
