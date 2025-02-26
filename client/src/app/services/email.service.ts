import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult } from '../interfaces/IResult';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly _http: HttpClient = inject(HttpClient);

  sendEmail(email: string): Observable<IResult<any>> {
    return this._http.post<IResult<any>>('http://localhost:3010/api/email', { email });
  }
  
}
