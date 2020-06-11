import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable, from, of, Subject } from 'rxjs';
import {  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoService {


  todos: Todo[];
  private subject = new Subject<Todo[]>();

  add(item: Todo){

    let id = 1;

    if(this.todos.length){
      id = this.todos[this.todos.length - 1].id + 1;
    }

    item.id = id;
    this.todos.push(item);

    this.subject.next(this.todos);

  }

  remove(id: number){
    const todoIndex = this.todos.findIndex(f => f.id === id);

    if(todoIndex < 0){
      return;
    }

    this.todos.splice(todoIndex, 1);
    this.subject.next(this.todos);
  }

  get(id: number){

    const todoIndex = this.todos.findIndex(f => f.id === id);

    if(todoIndex < 0) {
      return;
    }

    return of(this.todos[todoIndex]);
  }

  getAll(): Observable<Todo[]>{

    return this.subject.asObservable();
  }

  constructor() {

    this.todos = [];
  }
}
