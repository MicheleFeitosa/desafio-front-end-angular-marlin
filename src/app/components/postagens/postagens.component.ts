import { Component, OnInit } from '@angular/core';
import { catchError, finalize, tap, throwError } from 'rxjs';
import { PostagensService } from 'src/app/service/postagens.service';

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
  linkNavagacao: string;

  constructor(private postagensService: PostagensService) {
    this.assuntoPesquisado = '';
    this.resultadosBusca = 0;
    this.resultadoBuscaImagem = '';
    this.resultadoBuscaTitulo = '';
    this.resultadoBuscaTexto = '';
    this.linkNavagacao = '';
  }

  ngOnInit() {
    this.buscarInfoPostagens();
  }

  buscarInfoPostagens() {
    return this.postagensService
      .getPostagens()
      .pipe(
        tap((data) => {
          //Lógica para lidar com os dados recebidos
        }),
        catchError((error) => {
          // Lógica para lidar com erros
          return throwError(error);
        }),
        finalize(() => {})
      )
      .subscribe();
  }
}
