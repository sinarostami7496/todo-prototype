import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Time } from "src/app/models/time";
import { FormGroup } from '@angular/forms';

@Component({
  selector: "app-time-picker",
  templateUrl: "./time-picker.component.html",
  styleUrls: ["./time-picker.component.css"],
})
export class TimePickerComponent implements OnInit {

  @Output("onChangeTime") onChangeTime = new EventEmitter<Time>();
  time: Time;

  constructor() {
    this.time = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  ngOnInit() {}

  changeSecond(input: HTMLInputElement){

    if ( Number(input.value) >= 59 ){
      return;
    }

    const value = (Number(input.value));
    this.time.seconds = value;
    this.onChangeTime.emit(this.time);

  }

  changeHour(input: HTMLInputElement){

    if ( Number(input.value) >= 59 ){
      return;
    }

    const value = (Number(input.value));
    this.time.hours = value;
    this.onChangeTime.emit(this.time);

  }

  changeMinute(input: HTMLInputElement){


    if ( Number(input.value) >= 59 ){
      return;
    }

    const value = (Number(input.value));
    this.time.minutes = value;
    this.onChangeTime.emit(this.time);

  }

  increaseSeconds(input: HTMLInputElement){

    if ( Number(input.value) >= 59 ){
      return;
    }

    const value = (Number(input.value) + 1);
    input.value = value.toString();
    this.time.seconds = value;

    this.onChangeTime.emit(this.time);
  }

  decreaseSeconds(input: HTMLInputElement) {

    if ( Number(input.value) <= 0 ){
      return;
    }

    const value =  (Number(input.value) - 1);
    input.value = value.toString();
    this.time.seconds = value;

    this.onChangeTime.emit(this.time);
  }

  increaseMinutes(input: HTMLInputElement){

    if ( Number(input.value) >= 59 ){
      return;
    }

    const value = (Number(input.value) + 1);
    input.value = value.toString();
    this.time.minutes = value;

    this.onChangeTime.emit(this.time);

  }

  decreaseMinutes(input: HTMLInputElement){

    if ( Number(input.value) <= 0 ){
      return;
    }

    const value =  (Number(input.value) - 1);
    input.value = value.toString();
    this.time.minutes = value;

    this.onChangeTime.emit(this.time);

  }

  increaseHours(input: HTMLInputElement){

    if ( Number(input.value) >= 23 ){
      return;
    }

    const value = (Number(input.value) + 1);
    input.value = value.toString();
    this.time.hours = value;

    this.onChangeTime.emit(this.time);

  }

  decreaseHours(input: HTMLInputElement){

    if ( Number(input.value) <= 0 ){
      return;
    }

    const value =  (Number(input.value) - 1);
    input.value = value.toString();
    this.time.hours = value;

    this.onChangeTime.emit(this.time);

  }

}
