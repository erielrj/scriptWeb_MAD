import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css']
})
export class EnderecoFormComponent implements OnInit {
  
  public endereco: Endereco = new Endereco;
  public cep: string = "";

  constructor(private UsuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  buscaCEP() {
    this.UsuarioService.getEndereco(this.cep).subscribe( // validar o retorno
      res => {
        this.endereco = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }
}
