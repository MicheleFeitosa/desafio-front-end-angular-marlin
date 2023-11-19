import { Component, OnInit } from '@angular/core';
import { PostagensService } from 'src/app/service/postagens.service';
import { Postagem } from './postagem';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css'],
})
export class PostagensComponent implements OnInit {
  title = 'marlinteste';
  assuntoPesquisado: string;
  resultadosBusca: number;
  resultadoBuscaImagem: string;
  resultadoBuscaTitulo: string;
  resultadoBuscaTexto: string;
  listaDePostagens;

  constructor(private postagensService: PostagensService) {
    this.assuntoPesquisado = '';
    this.resultadosBusca = 0;
    this.resultadoBuscaImagem = '';
    this.resultadoBuscaTitulo = '';
    this.resultadoBuscaTexto = '';
    this.listaDePostagens = {};
  }

  ngOnInit() : void {
    this.postagensService.getPostagens()
    .subscribe(
      resposta => {
        //this.listaDePostagens = Object.entries(resposta);
        //this.listaDePostagens.forEach(element => {
          console.log(typeof this.listaDePostagens)
       // });
      }
    )
  }

   minhaFuncao(){
    
   }
}


 