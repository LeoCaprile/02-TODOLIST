
export class Todo {

    static fromJson({id,tarea,completado,creado}){

        const reTodo = new Todo(tarea);

        reTodo.id           = id;
        reTodo.completado   = completado;
        reTodo.creado       = creado;

        return reTodo;

    }


    constructor(tarea){
        
        this.tarea      = tarea;
        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();
        
    }

}