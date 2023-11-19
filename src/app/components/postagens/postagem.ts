export class Postagem {
  createdAt: string;
  title: string;
  image: string;
  body: string;
  id: Number;

  constructor() {
    this.createdAt = '';
    this.title = '';
    this.image = '';
    this.body = '';
    this.id = 0;
  }
}
