import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'register-user',
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

  constructor() { }

  ngOnInit() {
    this.savedUser = localStorage.getItem("enso-qr-id")
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasCameras = true;
    });
  }

  displayCameras(cameras: MediaDeviceInfo[]) {
    console.log('Devices: ', cameras);
    this.availableDevices = cameras;
    for (const device of cameras) {
      if (/bag|bak|back|rear|environment/gi.test(device.label)) { // FIXME skrøpelig sjekk
        this.scanner.changeDevice(device);
        this.selectedDevice = device;
        break;
      }
    }
    // fallback
    if (!this.selectedDevice) {
      this.selectedDevice = this.scanner.getDeviceById(cameras[cameras.length - 1].deviceId); // FIXME antar at riktig kamera er sist i lista
    }
  }

  handleQrCodeResult(resultString: string) {
    localStorage.setItem("enso-qr-id", resultString)
    this.qrScanResult = resultString;
  }

}
