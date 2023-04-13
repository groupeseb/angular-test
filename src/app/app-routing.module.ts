import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewContactComponent} from './components/new-contact/new-contact.component';
import {ListComponent} from './components/list/list.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'new', component: NewContactComponent},
  {path: 'list', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
