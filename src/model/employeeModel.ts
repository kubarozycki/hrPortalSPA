import { ProjectModel } from './projectModel';

export class EmployeeModel {
    Firstname: string;
    Lastname: string;
    BirthAt: Date;
    Email: string;
    CurrentProject?: ProjectModel;

    constructor(firstName: string, lastName: string, birthAt: Date, email: string, currentProject: ProjectModel) {
        this.Firstname = firstName;
        this.Lastname = lastName;
        this.BirthAt = birthAt;
        this.Email = email;
        this.CurrentProject = currentProject;
    }
}