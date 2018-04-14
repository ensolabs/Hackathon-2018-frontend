import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { ScoreResult } from '../model/all';

@Injectable()
export class BackendService {

  constructor(public client:HttpClient, public config:ConfigService) { }
  scoreStuff(){
    return this.client.post<ScoreResult>(
            this.config.urlOwnScore,
            {"email": "le@gmail.com"});
  }

   submitImage(img){
    return this.client.post(
            this.config.urlPostImage,
            {"email": "le@gmail.com",
              "image": img});
  }
}
