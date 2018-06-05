export class ProjectModel {
    ID: number;
    Name: string;
    Description: string;

    constructor(id: number, name: string, description: string) {
        this.ID = id;
        this.Name = name;
        this.Description = description;
    }
}