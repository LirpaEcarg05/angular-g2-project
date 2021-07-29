import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @Output() deviceEvent = new EventEmitter;

  constructor(
    private router: Router,
    private deviceService: DeviceService
    ) { }

  ngOnInit(): void {
  }

  addDevice(form: NgForm){
    // alert('add device');
    // console.log(form.value);
    // this.deviceEvent.emit(form.value);
    form.value.id = this.deviceService.getNewId();
    this.deviceService.addDevice(form.value);
    this.router.navigate(['/list']);
  }

}
