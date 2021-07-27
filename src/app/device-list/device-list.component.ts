import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Device} from './../models';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

addDevice(){
  this.router.navigate(['/add']);
}

}
