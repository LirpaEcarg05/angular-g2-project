import { Component } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-g2-project';
  title = "My First Angular component";
  appMessage = "";

  appMessageArray = ['hi', 'hello', 'goodbye'];

  appEvent(event: any) {
    // alert('from AppComponent Event');
    // alert(event);
    // this.appMessage = event;
  }

  // i=0
  // plus(){
  //   if(this.i >4){
  //     this.appMessage= "second works!";
  //   } 
  //   this.i++;
  // }

  // minus(){
  //   if(this.i <7){
  //     this.appMessage = "";
  //   }
  //   this.i--;
  // }

  devices: Device[] = [
    {
      id: 1,
      name: "Device01",
      brand: "Samsung",
      model: "Samsung A11",
      year: "2021",
      serial: "A11iii"
    }
  ]
  deviceDetail: Device = {
    id: 0,
    name: '',
    brand: '',
    model: '',
    year: '',
    serial: ''
  };
  showUpdate: boolean = false;

  addDevice(device: Device) {
    this.devices.push(device);
  }

  updateDetail(deviceId: number) {
    this.showUpdate = true;
    console.log('DEB ', deviceId);

    this.deviceDetail = this.devices.find(device => device.id === deviceId) || this.deviceDetail
    console.log(this.deviceDetail);

  }

  updateDisplay(updatedDevice: Device) {
    this.showUpdate = false;
    let index = this.devices.findIndex(device => device.id === updatedDevice.id) 
    this.devices[index] = updatedDevice || this.deviceDetail;
    console.log(index);
    console.log(updatedDevice);
    
    
  }

}