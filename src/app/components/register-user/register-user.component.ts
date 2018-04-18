import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Router } from '@angular/router';

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

    // navigator.mediaDevices.enumerateDevices().then(x => { console.log(x); });
    // console.log('Devices: ', cameras);
    // this.availableDevices = cameras;
    // for (const device of cameras) {
    //   console.log(cameras);
    //   const p2 = navigator.mediaDevices.enumerateDevices().then(function (devices) { console.log(devices); });
    //   if (/bag|bak|back|rear|environment/gi.test(device.label)) { // FIXME skrøpelig sjekk
    //     this.scanner.changeDevice(device);
    //     this.selectedDevice = device;
    //     break;
    //   }
    // }
    // // fallback
    // if (!this.selectedDevice) {
    //   this.selectedDevice = this.scanner.getDeviceById(cameras[cameras.length - 1].deviceId);
    //   // FIXME antar at riktig kamera er sist i lista
    // }
  }

  handleQrCodeResult(resultString: string) {
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
