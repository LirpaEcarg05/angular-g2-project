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

  appEvent(event:any){
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

  devices: Device[] = []

  addDevice(device:Device){
    this.devices.push(device);
  }
}