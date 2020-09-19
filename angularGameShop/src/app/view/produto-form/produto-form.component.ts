import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  public produto:Produto = new Produto;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:FormsModule){
    console.log(this.produto, form)
  }

}
