import { Injectable } from '@angular/core';
import {Device} from './models';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  id: number = 0;

  devices: Device[] = [
    {
      id: 1,
      name: "Device01",
      brand: "Samsung",
      model: "Samsung A11",
      year: "2021",
      serial: "A11iii"
    },
    {
      id: 2,
      name: "Device02",
      brand: "Iphone",
      model: "Iphone 12 Promax",
      year: "2019",
      serial: "Ipo0uue"
    }
  ]

  constructor() { }

  getDevices(){
    return this.devices;
  }

  getDevice(id: number){
    // this.devices.find(device => device.id === id);
    return this.devices.find(device => device.id === id);
  }

  addDevice(device:Device){
    this.devices.push(device);
    console.log(this.devices);
  }

  updateDevice(updatedDevice: Device){
    let index = this.devices.findIndex(devices => devices.id === updatedDevice.id);

    this.devices[index] = updatedDevice;
  }

  getNewId() {
    const index = this.devices.length -1
    return (this.devices[index].id || 0) + 1
  }
}
