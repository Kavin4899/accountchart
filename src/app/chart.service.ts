import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private _baseUrl2 = 'http://101.53.155.156/api/trading/account-group/get';
  private _baseUrl21 = 'http://101.53.155.156/api/trading/account-group/create';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    // const token=window.localStorage.getItem("token")
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     Authorization: 'BslogiKey ' + token
    //   })
    // };
    
    return this.http.get<any>(this._baseUrl2);
  }
  addDetail(data:any){
    console.log('1');
  return this.http.post<any>(this._baseUrl21,data);
  }


}
