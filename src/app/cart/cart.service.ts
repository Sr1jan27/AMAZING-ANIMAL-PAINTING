import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl  = environment.apiUrl + "/cart";

  
  private apiUrl1  = environment.apiUrl + "/cartName";
  
  private apiUrl2  = environment.apiUrl + "/cartSize";

  constructor(private http: HttpClient){}

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }

  // 

  // 
}
