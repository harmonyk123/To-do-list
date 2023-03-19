const form = document.querySelector("form");
const input = document.querySelector("#item");
const list = document.querySelector("#list");






form.addEventListener("submit", (e) => {
  //stop refreshing the page from the form submitting
  e.preventDefault();
  //get the input value
  const task = input.value;

  if (task){
  

  const todoList = document.createElement("div");
  todoList.className = "todo-list";

  const taskContentElement = document.createElement("div");
  taskContentElement.className = "content";
  todoList.appendChild(taskContentElement);

  //create checkbox for completedtask
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", task);
  checkbox.className = "todoItem";
  checkbox.addEventListener('change', completeItem)
  taskContentElement.appendChild(checkbox);

  //create input
  const taskInput = document.createElement("input");
  taskInput.className = "text";
  taskInput.setAttribute("type", "text");
  taskInput.setAttribute("value", task);
  taskInput.setAttribute("readonly", "readonly");
  taskContentElement.appendChild(taskInput);

  //edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "edit";
  editBtn.addEventListener('click',editItem)
  taskContentElement.appendChild(editBtn);

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.addEventListener("click", removeItem);
  taskContentElement.appendChild(deleteBtn);

  input.value = "";

  list.appendChild(todoList);
  }
});




//complete event
function completeItem(event) {
  let item = this.parentNode;
  let parent = item.parentNode;
  const completeToDo = document.querySelector('#list-completed')
  const listTodo = document.querySelector('#list')
  if(event.target.checked){

    parent.removeChild(item);
    completeToDo.appendChild(item)
  
  }else{
    listTodo.appendChild(item)

  }
  
}


//EDITITEM EVENTLISTENER
function editItem (event){
  const button = event.target
  
  let parent = this.parentNode
  item=parent.children[1]
  
  if(button.innerText == 'Edit'){
    button.innerText = "Save";
    item.removeAttribute("readonly")
    item.focus()
  }else {
    button.innerText = "Edit"
    item.setAttribute("readonly", "readonly")
  }
}


//REMOVEItEM EVENTLISTENER
function removeItem() {
  let item = this.parentNode;
  console.log(item.className)
  //grab the div
  let parent = item.parentNode;
  console.log(parent.className)
   //remove child
  parent.removeChild(item);
}


