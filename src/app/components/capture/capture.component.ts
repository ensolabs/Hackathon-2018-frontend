import { Component, OnInit } from '@angular/core';
import { WebCamComponent } from 'ack-angular-webcam';
import { BackendService } from '../../services/backend.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit {

  webcam: WebCamComponent; // will be populated by <ack-webcam [(ref)]="webcam">
  public showCapture = false;
  public showSpinner = false;
  public showTags = false;
  options: any = {
    video: true,
    useParentWidthHeight: false,
    height: 500,
    width: 800
  };

  facingMode = 'environment';
  useParentWidthHeight = false;

  constructor(public _service: BackendService, public router: Router, private dialog: MatDialog, private route: ActivatedRoute) {
    this.showTags = this.route.snapshot.params.debug === 'debug';
  }

  ngOnInit() {
  }

  captureImage() {
    this.webcam.captureAsFormData();
    const video = <any>document.getElementsByTagName('video')[0];
    const canvas = <any>document.getElementsByTagName('canvas')[0];
    if (video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight * 0.7;
      canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight,
        0, 0, canvas.width, canvas.height);
    }
    this.showCapture = true;
  }

  submitImage() {
    const canvas = <any>document.getElementsByTagName('canvas')[0];
    const dataURL = canvas.toDataURL();
    const base64 = dataURL.substr(dataURL.indexOf(',') + 1);
    this.showSpinner = true;
    this._service.submitImage(base64).subscribe(x => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;

      let tags = new Array<string>();
      if (this.showTags) {
        tags = x.tags.map(y => y.name);
      }
      dialogConfig.data = {
        result: x,
        tags: tags
      };
      const dialogref = this.dialog.open(ResultDialogComponent, dialogConfig);
      dialogref.afterClosed().subscribe(u => {
        this.router.navigate(['score']);
      });
      this.showSpinner = false;
    }, err => {
      alert('Something went wrong...' + err.message);
      this.showSpinner = false;
    });
  }

  discardImage() {
    this.showCapture = false;
  }

  onCamError(err) { }

  onCamSuccess() { }

}
