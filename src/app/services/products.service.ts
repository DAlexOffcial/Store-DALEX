import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient)

  private readonly url = 'https://fakestoreapi.com/products'

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url)
      .pipe(
        map(products => products.filter(
          product => product.category === "men's clothing" || product.category === "women's clothing"
        ))
      );
  }
}
