import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styles:['p {color:red}']
})
export class SecondComponent implements OnInit {

  @Input() secondMessage = "";

  constructor() { }

  ngOnInit(): void {
  }

  getMessage(){
    return this.secondMessage? this.secondMessage :'';
  }

}
