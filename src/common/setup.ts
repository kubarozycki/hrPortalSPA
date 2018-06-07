import { ProjectModel } from "../model/projectModel";
import { EmployeeModel } from "../model/employeeModel";
import { Constants } from './constants';

const projects = [
    new ProjectModel(4, "Cook spaghetti", "Recipe description"),
    new ProjectModel(2, "Cook lasagne", "Recipe description")
];

const employees = [
    new EmployeeModel(
        {
            Firstname: "Jan", Lastname: "Kowalski",
            BirthAt: new Date(2018, 11, 24, 10),
            Email: "jank@gmail.com", CurrentProject: projects[0]
        }),
    new EmployeeModel(
        {
            Firstname: "Jan", Lastname: "Nowak",
            BirthAt: new Date(2018, 11, 24, 10),
            Email: "jank@gmail.com", CurrentProject: projects[0]
        })
];

export  function Setup() {
    if (localStorage.getItem(Constants.EmployeesKey) == undefined) {
        localStorage.setItem(Constants.EmployeesKey, JSON.stringify(employees));
    }

    if (localStorage.getItem(Constants.ProjectsKey) == undefined) {
        localStorage.setItem(Constants.ProjectsKey, JSON.stringify(projects));
    }
}



