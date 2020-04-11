import * as http from 'http';
import * as fs from 'fs';
import * as url from 'url';
import * as mediasoup from 'mediasoup';
import { Worker } from 'mediasoup/lib/types';
export class App {
  private worker: Worker;
  constructor() {}
  public initServer() {
    http.createServer().listen(8080);
  }
  public async run() {
    this.worker = await mediasoup.createWorker().catch((err) => {
      console.error(err);
      return null;
    });
  }
}
