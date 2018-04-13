import { Component, OnInit } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';

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

  constructor() { }

  ngOnInit() {
  }
  genBase64(){
    this.webcam.getBase64()
    .then( base=>{this.base64=base; console.log(this.base64)})
    .catch( e=>console.error(e) )
  }

  onCamError(err){}

  onCamSuccess(){}

  captureImage() {
    const video = <any>document.getElementsByTagName('video')[0];
    const canvas = <any>document.getElementsByTagName('canvas')[0];
    if (video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);

      console.log(canvas.toDataURL());
    }
  };

}
