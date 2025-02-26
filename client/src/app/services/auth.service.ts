import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IDataUser, IResult } from '../interfaces/IResult';
import { Observable } from 'rxjs';
import { ILogin, IRegister } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _http: HttpClient = inject(HttpClient);

  registerAysnc(data: IRegister): Observable<IResult<IDataUser>> {
    return this._http.post<IResult<IDataUser>>('http://localhost:3010/api/register', data, { withCredentials: true })
  }

  loginAsync(data: ILogin): Observable<IResult<IDataUser>> {
    return this._http.post<IResult<IDataUser>>('http://localhost:3010/api/login', data, { withCredentials: true })
  }

  logoutAsync(): Observable<IResult<IDataUser>> {
    return this._http.post<IResult<IDataUser>>('http://localhost:3010/api/logout', {} ,{ withCredentials: true })
  }

  verifyTokenAsync(): Observable<IResult<IDataUser>> {
    return this._http.get<IResult<IDataUser>>('http://localhost:3010/api/verifytoken', { withCredentials: true })
  }
}
