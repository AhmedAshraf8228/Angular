import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductResponse} from '../models/ProductResponse';
import {Category} from '../models/category';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'https://dummyjson.com/products?limit=0';
  private categoriesUrl = 'https://dummyjson.com/products/categories';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.productUrl);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`https://dummyjson.com/products/${id}`);
  }
}
