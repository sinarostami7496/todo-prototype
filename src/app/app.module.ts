import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { DetailsComponent } from './components/details/details.component';
import { TimeControlComponent } from './components/controls/time-control/time-control.component';
import { TodoService } from './services/todo.service';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { ListComponent } from './components/list/list.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DetailsComponent,
    TimeControlComponent,
    OnlyNumberDirective,
    ListComponent,
    TimePickerComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
