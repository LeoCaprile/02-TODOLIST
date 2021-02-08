import { Todo } from "../classes";
import {todoList} from "../index"

const divTodoList           = document.querySelector('.contenedor-lista');
const inputTodo             = document.querySelector('#inputtodo');
const btnBorrarCompletados  = document.querySelector('#borrar-completados')
const btnesFunc             = document.querySelector('#botones__todos')
const btnAgregar            = document.querySelector('#btn__agregar')

export const ActualizarPendientes =()=>{
    const cantPend = document.querySelector('#cantidad__pendientes')
    let count = 0;
  
    for(let i=divTodoList.children.length-1; i>=0; i--){

        const elemento = divTodoList.children[i];
        
        if( elemento.classList.contains('completed'))
        {

        }else{
            count++;
        }

    
}

cantPend.innerText = `Pendientes:${count}`

}

ActualizarPendientes();


export const crearTodoHtml = (todo) =>{
    
   
const htmltodo = 
    `<div class="box ${(todo.completado)?'completed':''}" data-id="${todo.id}">
        
    <div id="items" class="column is-full">

        <div class="inside-items-checkbox"><input class="check" type="checkbox" ${(todo.completado)?'checked':''}></div>
        <div class="inside-items-text"><label class="subtitle">${(todo.tarea===undefined)?'': todo.tarea}</label></div>
        <div class="inside-items-button"><button class="delete is-large"></button></div>  
    
    </div>
    
</div>`

    

    const div = document.createElement('div');
    div.innerHTML = htmltodo;
    divTodoList.append(div.firstElementChild);



    return div;

}



//Insertar TODO
inputTodo.addEventListener('keyup', (event)=>{

    if(event.keyCode === 13 && inputTodo.value.length>0){

        const nuevoTodo = new Todo(inputTodo.value);
        todoList.nuevoTodo(nuevoTodo);
        inputTodo.value=''
        crearTodoHtml(nuevoTodo)
    }

    ActualizarPendientes();

})

btnAgregar.addEventListener('click', ()=>{

    if(inputTodo.value.length>0){
        
        const nuevoTodo = new Todo(inputTodo.value);
        todoList.nuevoTodo(nuevoTodo);
        inputTodo.value=''
        crearTodoHtml(nuevoTodo)
    }
    ActualizarPendientes();

})


//Marcar Completado TODO

divTodoList.addEventListener('click', (event)=>{

const nombreElemento    = event.target.localName
const todoElement       = event.target.parentElement.parentElement.parentElement
const todoId            = todoElement.getAttribute('data-id');

if(nombreElemento.includes('input')){
    todoList.marcarCompletado(todoId);
    todoElement.classList.toggle('completed');

}

//Eliminar TODO

if(nombreElemento.includes('button')){
    todoElement.classList.add('animate');    
    todoList.eliminarTodo(todoId)
    setTimeout(()=>{ 
    divTodoList.removeChild(todoElement)
    ActualizarPendientes();
    },500)

}

ActualizarPendientes();

})

//Borrar TODOS completados

btnBorrarCompletados.addEventListener('click', ()=>
    
    {
    todoList.elminarCompletados();

    for(let i=divTodoList.children.length-1; i>=0; i--){

        const elemento = divTodoList.children[i];
        
        if( elemento.classList.contains('completed'))
        {
            elemento.classList.add('animate')
            setTimeout(()=>{
                elemento.remove()
            },500)
            
        }
        
        
    }

    ActualizarPendientes();

    })

//Boton Pendientes, Completados y Todos

btnesFunc.addEventListener('click',(event)=>{

    const nameOfButton  = event.target.innerText;

    if(nameOfButton != "Pendientes" && nameOfButton != "Todos" && nameOfButton != "Completados" ){
        return;
    }

    for(const element of divTodoList.children){

        element.classList.remove('hidden');
        const completado = element.classList.contains('completed')

        switch(nameOfButton){

            case 'Pendientes':
                if(completado){
                    element.classList.add('hidden')
                }
            break;

            case 'Completados':
                if(!completado){
                    element.classList.add('hidden');
                }
            break;
        }

    }
    

}
)
