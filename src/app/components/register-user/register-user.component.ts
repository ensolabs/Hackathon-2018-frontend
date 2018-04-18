import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ZXingScannerComponent } from '../../zxing/zxing-scanner.component';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  savedUser: string;

  hasCameras = false;
  qrScanResult: string;
  scannerEnabled = true;
  autofocusEnabled = true;

  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo;

  constructor(private router: Router) { }

  ngOnInit() {
    this.savedUser = localStorage.getItem('enso-qr-id');
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasCameras = true;
    });
  }

  displayCameras(cameras: MediaDeviceInfo[]) {
    navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: 'environment' } }).then(device => {
      const v = device.getVideoTracks();
      if (v != null) {
        const label = v[0].label;
        navigator.mediaDevices.enumerateDevices().then(x => {
          const dev = x.filter(y => y.label === label);
          this.scanner.changeDevice(dev[0]);
          this.selectedDevice = dev[0];
        });
      }
    });
  }

  handleQrCodeResult(resultString: string) {
    this.scanner.changeDevice(null);
    this.scanner.scannerEnabled = false;
    const idConfirmed = confirm('Hei, ' + resultString + '?');
    if (idConfirmed) {
      localStorage.setItem('enso-qr-id', resultString);
      this.router.navigate(['/score']);
    } else {
      this.scanner.scannerEnabled = true;
    }
  }

}
