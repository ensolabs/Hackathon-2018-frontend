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
    this.savedUser = localStorage.getItem("qr-data")
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
    this.selectedDevice = this.scanner.getDeviceById(cameras[cameras.length - 1].deviceId); // FIXME antar at riktig kamera er sist i lista
  }

  handleQrCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    localStorage.setItem("qr-data", resultString)
    this.qrScanResult = resultString;
  }

}
