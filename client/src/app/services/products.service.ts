import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';
import { IResult } from '../interfaces/IResult';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _http: HttpClient = inject(HttpClient);

  getProducts(): Observable<IResult<IProduct[]>> {
    return this._http.get<IResult<IProduct[]>>(`http://localhost:3010/api/products`);
  }

  getProductById(id: string): Observable<IResult<IProduct>> {
    return this._http.get<IResult<IProduct>>(`http://localhost:3010/api/products/${id}`);
  }

}
