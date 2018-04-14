import { Component, OnInit } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {

  webcam:WebCamComponent//will be populated by <ack-webcam [(ref)]="webcam">
  base64

  options:any = {
    video:true,
    width:500,
    height:500
  }

  constructor(public _service:BackendService) { }

  ngOnInit() {
  }

  onCamError(err){}

  onCamSuccess(){}

  captureImage() {
    this.webcam.getBase64()
      .then( base=>{
        this.base64=base.substr(base.indexOf(',')+1);
        console.log(this.base64);
        this._service.submitImage(this.base64).subscribe(x=>{
            console.log(x);
          },err=>{console.log(err)});
      })
      .catch( e=>console.error(e) )



  };

}
