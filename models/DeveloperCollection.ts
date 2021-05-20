import {Developer} from "./Developer";

export class DeveloperCollection {
    private developers:Map<String, Developer>

    constructor() {
        this.developers = new Map<String, Developer>();
    }

    getDeveloper(id:string) {
        return this.developers.get(id);
    }

    addDeveloper(id:string, developer:Developer) {
        this.modifyDeveloper(id, developer)
    }

    modifyDeveloper(id:string, developer:Developer) {
        this.developers.set(id, developer);
    }

    removeDeveloper(id:string) {
        this.developers.delete(id);
    }

    


}