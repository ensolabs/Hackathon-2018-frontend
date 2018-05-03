import { Component, OnInit } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {

  webcam: WebCamComponent; // will be populated by <ack-webcam [(ref)]="webcam">
  public showCapture = false;

  options: any = {
    video: true
    };

  facingMode = 'environment';
  useParentWidthHeight = true;

  constructor(public _service: BackendService, public router: Router) { }

  ngOnInit() {
  }

  captureImage() {

    const video = <any>document.getElementsByTagName('video')[0];
    const canvas = <any>document.getElementsByTagName('canvas')[0];
    if (video) {
      canvas.width = video.width;
      canvas.height = video.height;
      canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight,
                                        0, 0, canvas.width, canvas.height);

    }

    this.showCapture = true;

  }

  submitImage() {
    const canvas = <any>document.getElementsByTagName('canvas')[0];
    const dataURL = canvas.toDataURL();
    const base64 = dataURL.substr(dataURL.indexOf(',') + 1);
    console.log(base64);
    this._service.submitImage(base64).subscribe(x => {
        this.router.navigate(['score']);
      }, err => {console.log(err); });
  }

  discardImage() {
    this.showCapture = false;
  }

  onCamError(err) {}

  onCamSuccess() {}

}
