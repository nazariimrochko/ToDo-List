 import './index.css';

 const inputTodo = document.querySelector(".todo-input");
 const buttonTodo = document.querySelector(".todo-button");
 const listTodo = document.querySelector(".todo-list");

 // Event-Listener
 document.addEventListener('DOMContentLoaded', getTodos);

 buttonTodo.addEventListener("click", addTodo);

 listTodo.addEventListener("click", deleteCheck);


 // Function
 function addTodo(event) {
  event.preventDefault();
  // create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = inputTodo.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //add todoo to local-storage
  saveLocalTodos(inputTodo.value);
  // check marc button
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  // check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "Delete";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // append to list
  listTodo.appendChild(todoDiv);
  inputTodo.value = "";
 }

// Function button Delete todoo

 function deleteCheck(e) {
  const item = e.target;
  //delete todoo
  if(item.classList[0]=== "trash-btn"){
   const todo = item.parentElement;
   //Animation
   todo.classList.add("fail");
   removeLocalTodos(todo);
   todo.addEventListener("transitionend",() => {
    todo.remove();
   })
  }
  //Function button complete

  if (item.classList[0] === "complete-btn"){
   const todo = item.parentElement;
   todo.classList.toggle("completed");
  }

 };
 function saveLocalTodos(todo){
  let todos;
  if(localStorage.getItem('todos') === null){
   todos = [];
  }else{
   todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos',JSON.stringify(todos));
 };

 function getTodos(){
  let todos;
  if(localStorage.getItem('todos') === null){
   todos = [];
  }else{
   todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo){
   // create div
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
   // create li
   const newTodo = document.createElement("li");
   newTodo.innerText = todo;
   newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);

   // check marc button
   const completeButton = document.createElement("button");
   completeButton.innerText = "Complete";
   completeButton.classList.add("complete-btn");
   todoDiv.appendChild(completeButton);
   // check trash button
   const trashButton = document.createElement("button");
   trashButton.innerHTML = "Delete";
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);
   // append to list
   listTodo.appendChild(todoDiv);
  });
 };

 function removeLocalTodos(todo) {
  let todos;
  if(localStorage.getItem('todos') === null){
   todos = [];
  }else{
   todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1)
  localStorage.setItem("todos", JSON.stringify(todos));
 };


 // import App from './App';
 // import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
