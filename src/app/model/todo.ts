export class Todo {
    titre:string;
    description:string;
    dateExecution:string;
    constructor(
       // public id: number,
       titre: string,
       description: string,
       dateExecution: string    
      ) {
        this.titre = titre;
        this.description = description;
        this.dateExecution = dateExecution;
        }
}
