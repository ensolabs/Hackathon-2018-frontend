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
  base64;
  public showCapture:boolean = false;

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

    const b = canvas.toDataURL();
    this.base64=b.substr(b.indexOf(',')+1);
    console.log(this.base64);
    this._service.submitImage(this.base64).subscribe(x=>{
        console.log(x);
      },err=>{console.log(err)});


  /*  this.webcam.getBase64()
      .then( base=>{
        this.base64=base.substr(base.indexOf(',')+1);
        console.log(this.base64);
        this._service.submitImage(this.base64).subscribe(x=>{
            console.log(x);
          },err=>{console.log(err)});
      })
      .catch( e=>console.error(e) )*/



  };

  discardImage(){
    this.showCapture = false;
  }

}
