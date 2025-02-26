import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HanlderError } from '../../libs/HandlerError';
import { ProductComponent } from "../product/product.component";
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/IProduct';
import { IDataUser, IResult } from '../../interfaces/IResult';

@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent {

  private readonly _authService: AuthService = inject(AuthService);
  private readonly _productService: ProductsService = inject(ProductsService);

  productsAll: IProduct[] = [];
  autenticated: IResult<IDataUser> | null = null;

  constructor(){

    this._productService.getProducts().subscribe({
      next: result => {
        this.productsAll = result.data || [];
      },
      error: error => {
        HanlderError(error);
      }
    })

    this._authService.verifyTokenAsync().subscribe({
      next: result => {
        this.autenticated = result;
      },
      error: error => {
        HanlderError(error);
      }
    })
  }

}
