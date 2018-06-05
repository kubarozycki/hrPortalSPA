import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../model/employeeModel';
import { ProjectModel } from '../../../model/projectModel';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styles: []
})
export class EmployeesListComponent implements OnInit {

  readonly projectsList: ProjectModel[] = [
    new ProjectModel(1, "Grass painting", "Grass painting is very nice project"),
    new ProjectModel(2, "Repairing old bike", "All employees in this project are engineers")
  ];

  readonly employeesList: EmployeeModel[] = [
    new EmployeeModel("Jan", "Kowalski", new Date(1990, 11, 17), "jankowalski@gmail.com", this.projectsList[1]),
    new EmployeeModel("Jan", "Nowak", new Date(1995, 11, 17), "jannowak@gmail.com", this.projectsList[0]),
  ];

  constructor() { }

  ngOnInit() {
  }

}
