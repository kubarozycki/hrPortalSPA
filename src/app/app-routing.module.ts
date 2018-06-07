import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from  './employees/employees-list/employees-list.component';
import { EmployeesAddComponent } from './employees/employees-add/employees-add.component';

const routes: Routes = [
  { path: "", redirectTo: "/employees", pathMatch: "full" },
  {
    path: 'employees', children: [
      { path: '', component: EmployeesListComponent },
      { path: 'list', component: EmployeesListComponent },
      { path: 'add', component: EmployeesAddComponent }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
