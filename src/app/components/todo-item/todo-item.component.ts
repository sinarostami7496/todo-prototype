import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input("todo") todo:Todo;

  constructor(private api: TodoService) { }

  ngOnInit() {
  }



  remove(id: number){
    if(confirm("Are you sure ?")){
      this.api.remove(id);
    }
  }

}
