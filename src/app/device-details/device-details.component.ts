import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { DeviceService } from '../device.service';
import { Device } from './../models';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  @Input() deviceDetail: Device=  {
    id: 0,
    name: '',
    brand: '',
    model: '',
    year:'',
    serial:''
  };

  @Output() updateDetail = new EventEmitter();

  constructor(
    private route: Router,
    private deviceService: DeviceService
    ) { 
    
  }

  ngOnInit(): void {

  }

  updateDevice(id: number){
    // this.updateDetail.emit(id);
    // this.deviceService.id = this.deviceDetail.id;
    this.route.navigate([`/update/${id}`]);
  }

}
