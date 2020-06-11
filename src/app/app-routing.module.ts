import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { DetailsComponent } from './components/details/details.component';



const routes: Routes = [
  { path: '', component: AddComponent },
  { path: 'add', component: AddComponent },
  { path: 'details/:id', component: DetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
