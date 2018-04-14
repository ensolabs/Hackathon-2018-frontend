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
  public showCapture:boolean = false;

  options:any = {
    video:true,
    width:500,
    height:500
  }

  constructor(public _service:BackendService) { }

  ngOnInit() {
  }

  captureImage() {

    const video = <any>document.getElementsByTagName('video')[0];
    const canvas = <any>document.getElementsByTagName('canvas')[0];
    if (video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
    }

    console.log('show capture');
    this.showCapture = true;

  }

  submitImage(){
    const canvas = <any>document.getElementsByTagName('canvas')[0];
    const dataURL = canvas.toDataURL();
    const base64 = dataURL.substr(dataURL.indexOf(',') + 1);
    console.log(base64);
    this._service.submitImage(base64).subscribe(x=>{
        console.log(x);
      },err=>{console.log(err)});
  };

  discardImage(){
    this.showCapture = false;
  }

  onCamError(err){}

  onCamSuccess(){}

}
