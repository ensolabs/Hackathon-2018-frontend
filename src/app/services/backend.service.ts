import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {

  constructor(public client:HttpClient) { }
  scoreStuff(){
    return this.client.get("http://backend/hei");
  }
}
