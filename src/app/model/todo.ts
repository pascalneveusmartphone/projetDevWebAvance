export class Todo {
    id:number;
    titre:string;
    description:string;
    dateExecution:string;
    constructor(
       id: number,
       titre: string,
       description: string,
       dateExecution: string    
      ) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.dateExecution = dateExecution;
        }
}
