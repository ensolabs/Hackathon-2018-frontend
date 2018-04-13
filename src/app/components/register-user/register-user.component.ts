import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  hasCameras = false;
  qrScanResult: string;
  scannerEnabled = true;

  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo;

  constructor() { }

  ngOnInit() {
    //this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
    //  this.hasCameras = true;

      // selects the devices's back camera by default
      //for (const device of devices) {
      //  if (/back|rear|environment/gi.test(device.label)) {
      //    this.scanner.changeDevice(device);
      //    this.selectedDevice = device;
      //    break;
      //  }
      //}
    //});

    //this.scanner.scanComplete.subscribe((result: Result) => {
    //    this.qrResult = result;
    //});
  }

  displayCameras(cameras: MediaDeviceInfo[]) {
    console.log('Devices: ', cameras);
    this.availableDevices = cameras;
    this.selectedDevice = this.scanner.getDeviceById(cameras[0].deviceId);
  }

  handleQrCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    this.qrScanResult = resultString;
  }

}
