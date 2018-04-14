import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class BackendService {

  constructor(public client:HttpClient, public config:ConfigService) { }
  scoreStuff(){
    return this.client.get(this.config.urlPostImage);
  }
}
