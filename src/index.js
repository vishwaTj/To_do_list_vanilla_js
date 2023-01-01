
//Slectors
const todoInput = document.querySelector(".input-task");
const todoButton = document.querySelector(".add-task");
const todoList = document.querySelector(".todo-list");
const RemoveAll = document.querySelector("#RemoveAll");
const RemoveCompleted = document.querySelector("#RemoveCompleted");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", DeleteAndComplete);
RemoveAll.addEventListener("click",ClearAllTasks);
RemoveCompleted.addEventListener("click",clearCompletedtasks);

//Functions
function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();

  //create element frome for todo
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li
  const newTodo = document.createElement("li");

  // for(var count in check_value){
  var newCheckBox = document.createElement('input');
  newCheckBox.type = 'checkbox';
  newCheckBox.classList.add('checkbox');
  todoDiv.appendChild(newCheckBox);

  // text for todo item
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // add to local storage
  saveLocalTodos(todoInput.value);


  //Delete button
  const TrashButton = document.createElement("button");
  TrashButton.innerHTML = '<i class="fas fa-trash"></i>';
  TrashButton.classList.add("delete-btn");
  todoDiv.appendChild(TrashButton);

  // appending the entire div to list
  todoList.appendChild(todoDiv);

  // clear todo input value
  todoInput.value = "";
}

function DeleteAndComplete(e) {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.classList.add("Drop-Task");
    removeLocalTodos(todo);
    // adding a call back and using transitionend to wait for the animation to finish
    //  before getting deleted immidiately add transition animation
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if(item.classList[0] === "checkbox"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");   
  }
}


function ClearAllTasks(e){
  const todos = document.querySelectorAll(".todo");
  todos.forEach(function(todo){
    todo.classList.add("Drop-Task");
    let ArrayStored;
    ArrayStored = JSON.parse(localStorage.getItem("todos"));
    let tempindex = ArrayStored.indexOf(todo.innerText); 
    if(tempindex>=0){
      ArrayStored.splice(tempindex,1);
      localStorage.setItem("todos",JSON.stringify(ArrayStored));
    }
    // adding a call back and using transitionend to wait for the animation to finish
    //  before getting deleted immidiately add transition animation
    todo.addEventListener("transitionend", function () {
      todo.remove();})
  });
}

function clearCompletedtasks(todo){
  const todos = document.querySelectorAll(".todo");
  todos.forEach(function (todo){
    if (todo.classList.contains("completed")) {
        todo.classList.add("Drop-Task");
        let ArrayStored;
        ArrayStored = JSON.parse(localStorage.getItem("todos"));
        let tempindex = ArrayStored.indexOf(todo.innerText); 
        if(tempindex>=0){
          ArrayStored.splice(tempindex,1);
          localStorage.setItem("todos",JSON.stringify(ArrayStored));
        }
        todo.addEventListener("transitionend", function () {
        todo.remove();})
    }
  });

}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  // check if there are any items already present
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    //create element frome for todo
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement("li");

    // for(var count in check_value){
    var newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.classList.add('checkbox');
    todoDiv.appendChild(newCheckBox);
    
    // text for todo item
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Delete button
    const TrashButton = document.createElement("button");
    TrashButton.innerHTML = '<i class="fas fa-trash"></i>';
    TrashButton.classList.add("delete-btn");
    todoDiv.appendChild(TrashButton);

    // appending the entire div to list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo){
  let todos;
  // check if there are any items already present
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
   const todoIndex = todo.children[0].innerText;
   todos.splice(todos.indexOf(todoIndex),1);
   localStorage.setItem("todos",JSON.stringify(todos));
}

// localStorage.clear();
