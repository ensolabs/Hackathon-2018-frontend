import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {

  public options:any = {
    audio: false,
    video: true,
    width: 500,
    height: 500,
    cameraType: 'back'
  };

  constructor() { }

  ngOnInit() {
  }
  genBase64(){
    this.webcam.getBase64()
    .then( base=>{this.base64=base; console.log(this.base64)})
    .catch( e=>console.error(e) )
  }

  //get HTML5 FormData object and pretend to post to server
  genPostData(){
    this.webcam.captureAsFormData({fileName:'file.jpg'})
    .then( formData=>this.postFormData(formData) )
    .catch( e=>console.error(e) )
  }

  //a pretend process that would post the webcam photo taken
  postFormData(formData){
    const config = {
      method:"post",
      url:"http://www.aviorsciences.com/",
      body: formData
    }

    const request = new Request(config)

    return this.http.request( request )
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
