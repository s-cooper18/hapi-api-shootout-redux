import {v4 as uuidv4} from 'uuid';

export class CreateDeveloperRequest {
    id:string;
    name:string;
    team:string;
    skills:Set<string>;
    createdAt:Date;
    updatedAt:Date;

    constructor(name:string, team:string, skills:Set<string>) {
        this.name = name;
        this.team = team;
        this.skills = skills;
        this.createdAt = new Date(Date.now()); // set to now
        this.updatedAt = new Date(Date.now()); // set to now
        this.id = uuidv4();
    }

    updateParam(name:string, team:string, skills:string) {
        // update the updated at time


    }

}