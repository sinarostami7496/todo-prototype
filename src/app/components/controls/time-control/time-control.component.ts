import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'time-control',
  templateUrl: './time-control.component.html',
  styleUrls: ['./time-control.component.css']
})
export class TimeControlComponent implements OnInit {

  @Input("value") value: number;
  @Input("maxValue") max: number;
  @Input("name") name: string;


  constructor() {
    console.log(this.max);

  }

  ngOnInit() {

  }

  increaseTime(){
    console.log(this.value);

    if( this.value >= this.max ){
      return ;
    }

    this.value = this.value ++ ;
  }

  decreaseTime(){
    console.log(this.value);

    if( this.value <= 0 ){
      return ;
    }

    this.value = this.value -- ;
  }

}
