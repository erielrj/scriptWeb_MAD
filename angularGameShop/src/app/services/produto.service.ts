import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  private localURL = environment.apiDados;
  private colletionProduct = "produto";

  addProduct(produto: Produto) {
    return this.http.post<Produto>(this.localURL + this.colletionProduct, produto)
  }


  getProduct(id: string){
    return this.http.get<Produto>(this.localURL+this.colletionProduct+ "/" + id)
  }
}
