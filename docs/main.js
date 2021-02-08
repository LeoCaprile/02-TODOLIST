/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/*! exports provided: Todo, TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/componentes */ \"./src/js/componentes.js\");\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return _todo_class__WEBPACK_IMPORTED_MODULE_1__[\"Todo\"]; });\n\n/* harmony import */ var _todolist_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist.class */ \"./src/classes/todolist.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return _todolist_class__WEBPACK_IMPORTED_MODULE_2__[\"TodoList\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n\r\nclass Todo {\r\n\r\n    static fromJson({id,tarea,completado,creado}){\r\n\r\n        const reTodo = new Todo(tarea);\r\n\r\n        reTodo.id           = id;\r\n        reTodo.completado   = completado;\r\n        reTodo.creado       = creado;\r\n\r\n        return reTodo;\r\n\r\n    }\r\n\r\n\r\n    constructor(tarea){\r\n        \r\n        this.tarea      = tarea;\r\n        this.id         = new Date().getTime();\r\n        this.completado = false;\r\n        this.creado     = new Date();\r\n        \r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/classes/todolist.class.js":
/*!***************************************!*\
  !*** ./src/classes/todolist.class.js ***!
  \***************************************/
/*! exports provided: TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return TodoList; });\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n\r\n \r\n class TodoList{\r\n\r\n    constructor(){\r\n       this.cargarLocalStorage();\r\n    }\r\n\r\n    nuevoTodo(todo){\r\n        \r\n        this.todos.push(todo);\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    eliminarTodo(id){\r\n\r\n        this.todos = this.todos.filter(todo => todo.id != id)\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    marcarCompletado(id){\r\n\r\n        for (const todo of this.todos){\r\n\r\n             if (todo.id == id){\r\n                 todo.completado = !todo.completado\r\n             }\r\n        }\r\n        this.guardarLocalStorage();\r\n\r\n    }\r\n\r\n    elminarCompletados(){\r\n        \r\n        this.todos = this.todos.filter(todo => !todo.completado )\r\n\r\n    }\r\n\r\n    guardarLocalStorage(){\r\n\r\n        localStorage.setItem('todos',JSON.stringify(this.todos));\r\n\r\n    }\r\n\r\n    cargarLocalStorage(){\r\n\r\n        this.todos = (localStorage.getItem('todos'))\r\n                    ? JSON.parse(localStorage.getItem('todos'))\r\n                    : [];\r\n\r\n        this.todos = this.todos.map(_todo_class__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"].fromJson)\r\n                    \r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/classes/todolist.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: todoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoList\", function() { return todoList; });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n\n\n\n\n\n\nconst todoList = new _classes__WEBPACK_IMPORTED_MODULE_1__[\"TodoList\"]()\nconsole.log(todoList)\ntodoList.todos.forEach(_js_componentes__WEBPACK_IMPORTED_MODULE_2__[\"crearTodoHtml\"]);\nObject(_js_componentes__WEBPACK_IMPORTED_MODULE_2__[\"ActualizarPendientes\"])();\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/*! exports provided: ActualizarPendientes, crearTodoHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActualizarPendientes\", function() { return ActualizarPendientes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crearTodoHtml\", function() { return crearTodoHtml; });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\nconst divTodoList           = document.querySelector('.contenedor-lista');\nconst inputTodo             = document.querySelector('#inputtodo');\nconst btnBorrarCompletados  = document.querySelector('#borrar-completados')\nconst btnesFunc             = document.querySelector('#botones__todos')\nconst btnAgregar            = document.querySelector('#btn__agregar')\n\nconst ActualizarPendientes =()=>{\n    const cantPend = document.querySelector('#cantidad__pendientes')\n    let count = 0;\n  \n    for(let i=divTodoList.children.length-1; i>=0; i--){\n\n        const elemento = divTodoList.children[i];\n        \n        if( elemento.classList.contains('completed'))\n        {\n\n        }else{\n            count++;\n        }\n\n    \n}\n\ncantPend.innerText = `Pendientes:${count}`\n\n}\n\nActualizarPendientes();\n\n\nconst crearTodoHtml = (todo) =>{\n    \n   \nconst htmltodo = \n    `<div class=\"box ${(todo.completado)?'completed':''}\" data-id=\"${todo.id}\">\n        \n    <div id=\"items\" class=\"column is-full\">\n\n        <div class=\"inside-items-checkbox\"><input class=\"check\" type=\"checkbox\" ${(todo.completado)?'checked':''}></div>\n        <div class=\"inside-items-text\"><label class=\"subtitle\">${(todo.tarea===undefined)?'': todo.tarea}</label></div>\n        <div class=\"inside-items-button\"><button class=\"delete is-large\"></button></div>  \n    \n    </div>\n    \n</div>`\n\n    \n\n    const div = document.createElement('div');\n    div.innerHTML = htmltodo;\n    divTodoList.append(div.firstElementChild);\n\n\n\n    return div;\n\n}\n\n\n\n//Insertar TODO\ninputTodo.addEventListener('keyup', (event)=>{\n\n    if(event.keyCode === 13 && inputTodo.value.length>0){\n\n        const nuevoTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"](inputTodo.value);\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].nuevoTodo(nuevoTodo);\n        inputTodo.value=''\n        crearTodoHtml(nuevoTodo)\n    }\n\n    ActualizarPendientes();\n\n})\n\nbtnAgregar.addEventListener('click', ()=>{\n\n    if(inputTodo.value.length>0){\n        \n        const nuevoTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"](inputTodo.value);\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].nuevoTodo(nuevoTodo);\n        inputTodo.value=''\n        crearTodoHtml(nuevoTodo)\n    }\n    ActualizarPendientes();\n\n})\n\n\n//Marcar Completado TODO\n\ndivTodoList.addEventListener('click', (event)=>{\n\nconst nombreElemento    = event.target.localName\nconst todoElement       = event.target.parentElement.parentElement.parentElement\nconst todoId            = todoElement.getAttribute('data-id');\n\nif(nombreElemento.includes('input')){\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].marcarCompletado(todoId);\n    todoElement.classList.toggle('completed');\n\n}\n\n//Eliminar TODO\n\nif(nombreElemento.includes('button')){\n    todoElement.classList.add('animate');    \n    _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].eliminarTodo(todoId)\n    setTimeout(()=>{ \n    divTodoList.removeChild(todoElement)\n    ActualizarPendientes();\n    },500)\n\n}\n\nActualizarPendientes();\n\n})\n\n//Borrar TODOS completados\n\nbtnBorrarCompletados.addEventListener('click', ()=>\n    \n    {\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].elminarCompletados();\n\n    for(let i=divTodoList.children.length-1; i>=0; i--){\n\n        const elemento = divTodoList.children[i];\n        \n        if( elemento.classList.contains('completed'))\n        {\n            elemento.classList.add('animate')\n            setTimeout(()=>{\n                elemento.remove()\n            },500)\n            \n        }\n        \n        \n    }\n\n    ActualizarPendientes();\n\n    })\n\n//Boton Pendientes, Completados y Todos\n\nbtnesFunc.addEventListener('click',(event)=>{\n\n    const nameOfButton  = event.target.innerText;\n\n    if(nameOfButton != \"Pendientes\" && nameOfButton != \"Todos\" && nameOfButton != \"Completados\" ){\n        return;\n    }\n\n    for(const element of divTodoList.children){\n\n        element.classList.remove('hidden');\n        const completado = element.classList.contains('completed')\n\n        switch(nameOfButton){\n\n            case 'Pendientes':\n                if(completado){\n                    element.classList.add('hidden')\n                }\n            break;\n\n            case 'Completados':\n                if(!completado){\n                    element.classList.add('hidden');\n                }\n            break;\n        }\n\n    }\n    \n\n}\n)\n\n\n//# sourceURL=webpack:///./src/js/componentes.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });