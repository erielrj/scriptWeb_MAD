import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../model/endereco';
import { Usuario } from '../model/usuario';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private localURL = environment.apiDados;
  private colletionUser = "usuario";

  constructor(private http: HttpClient) { }

  getEndereco(cep: string) {
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`)
  }

  addUser(usuario: Usuario) {
    return this.http.post<Usuario>(this.localURL + this.colletionUser, usuario)
  }

  getUser(id: string) {
    return this.http.get<Usuario>(this.localURL + this.colletionUser + "/" + id)
  }

}
