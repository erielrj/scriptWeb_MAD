import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {

  private id: string = null;
  public usuario: Usuario = new Usuario;

  constructor(
    private activatedRouter: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get("id");

    if(this.id){
      this.usuarioService.getUser(this.id).subscribe(
        res=> {
          this.usuario = res;
        }
      );
    }
  }

}
