import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class BackendService {

  constructor(public client:HttpClient, public config:ConfigService) { }
  scoreStuff(){
    return this.client.post(
            this.config.urlOwnScore,
            {"email": "odne@enso.no"});
  }

   submitImage(img){
    return this.client.post(
            this.config.urlPostImage,
            {"email": "le@gmail.com",
              "image": img});
  }
}
