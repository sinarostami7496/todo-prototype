import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { Time } from 'src/app/models/time';
import { TimeValidation } from 'src/app/validations/time-validation';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  todoForm: FormGroup;
  submitted: boolean;

  constructor(private api: TodoService) {
    this.submitted = false;
  }

  ngOnInit() {
    this.todoForm = new FormGroup({
      time: new FormGroup({
        hours: new FormControl('', TimeValidation.validate ),
        minutes: new FormControl(0, Validators.required),
        seconds: new FormControl(0, Validators.required),
      }),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });

  }

  setTime(time: Time){
    this.getHours.setValue(time.hours);
    this.getMinutes.setValue(time.minutes);
    this.getSeconds.setValue(time.seconds);
  }

  get getTitleControl(){
    return this.todoForm.get('title') as FormControl;
  }

  get getDescriptionControl(){
    return this.todoForm.get('description') as FormControl;
  }

  get getSeconds() {
    const time = this.getTime;
    return time.get('seconds') as FormControl;
  }

  get getHours() {
    const time = this.getTime;
    return time.get('hours') as FormControl;
  }

  get getMinutes() {
    const time = this.getTime;
    return time.get('minutes') as FormControl;
  }

  get getTime(): FormGroup{
    return this.todoForm.get('time') as FormGroup;
  }

  onSubmit(){
    this.submitted = true;

    if(!this.todoForm.valid){
      return;
    }

    const todo = this.todoForm.value as Todo;
    this.api.add(todo);
  }
}
