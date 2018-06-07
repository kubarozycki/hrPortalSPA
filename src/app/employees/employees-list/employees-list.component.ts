import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../model/employeeModel';
import { ProjectModel } from '../../../model/projectModel';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styles: []
})
export class EmployeesListComponent implements OnInit {

  employeesList: EmployeeModel[];

  constructor() {
  }

  ngOnInit() {
    this.employeesList = JSON.parse(localStorage.getItem("employees"));
  }

}
