import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  todo: Todo;
  selectedId: number;

  constructor(private api:TodoService, private route: ActivatedRoute) {
    this.todo = {
      id: 0,
      description: '',
      title: '',
      time: {
        hours: 0,
        seconds: 0,
        minutes: 0
      }
    }
  }

  ngOnInit() {

   this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.api.get(this.selectedId);
      })
    ).subscribe(res => {
      this.todo = res;
    })
  }

}
