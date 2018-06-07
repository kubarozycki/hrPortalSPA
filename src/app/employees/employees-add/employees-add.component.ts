import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../../../model/projectModel';
import { EmployeeModel } from '../../../model/employeeModel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employees-add',
  templateUrl: 'employees-add.component.html',
  styles: []
})
export class EmployeesAddComponent implements OnInit {

  projectsList: ProjectModel[];
  model: EmployeeModel = new EmployeeModel();
  constructor() { }

  ngOnInit() {
    this.projectsList = JSON.parse(localStorage.getItem("projects"));
  }

  onSubmit() {
    let employeesList: EmployeeModel[] = JSON.parse(localStorage.getItem("employees"));
    employeesList.push(this.model);
    localStorage.setItem("employees", JSON.stringify(employeesList));
    
    window.location.href='employees/list'; //todo replace with angular router
  }

}
