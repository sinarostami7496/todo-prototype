import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  todos: Todo[];

  constructor(private api: TodoService) { }

  ngOnInit() {
    this.subscription = this.api.getAll().subscribe(res => {
      this.todos = res;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
