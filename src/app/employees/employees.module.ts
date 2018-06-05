import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ EmployeesListComponent, EmployeesAddComponent]
})
export class EmployeesModule { }
