import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChartService } from './chart.service';
import { AccountService } from './account.service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private AccountService: AccountService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = localStorage.getItem('token');
        request = request.clone({
            setHeaders: {
                Authorization: `BslogiKey ${currentUser}`
            }
        });
        console.log(currentUser);
        return next.handle(request);
    }
}