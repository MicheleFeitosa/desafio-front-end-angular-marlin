import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostagensService {
  constructor(private httpClient: HttpClient) {}

  public getPostagens() {
    return this.httpClient.get(
      'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post'
    );
  }
}
