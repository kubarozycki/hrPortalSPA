import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../../../model/projectModel';

@Component({
  selector: 'app-employees-add',
  templateUrl: 'employees-add.component.html',
  styles: []
})
export class EmployeesAddComponent implements OnInit {

  projectsList:ProjectModel[];
  constructor() { }

  ngOnInit() 
  {
    this.projectsList = JSON.parse(localStorage.getItem("projects"));
  }

}
