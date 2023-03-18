let addButton = document.querySelector("#add");


addButton.addEventListener("click", function () {
  // grab the value of the input tag
  let newItem = document.getElementById("item").value;
  // if the input tag is not empty then run our function to add an item
  if (newItem) {
    // this function will add a new item to the todo list
    addNewItem(newItem);
    // reset  go back to the top 
    document.getElementById("item").value = "";
  }
});


function addNewItem(text) {
  let list = document.getElementById("todo");

  let item = document.createElement("li");
  item.setAttribute("readonly", "readonly");

  item.innerText = text;

    //edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "edit";
  //editBtn.addEventListener('click',editItem)
  item.appendChild(editBtn);

  //complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "Complete";
  completeBtn.className = "complete";
  completeBtn.addEventListener("click", completeItem);
  item.appendChild(completeBtn);

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.addEventListener("click", removeItem);
  item.appendChild(deleteBtn);

  list.insertBefore(item, list.childNodes[0]);
}



function completeItem() {
  let item = this.parentNode;
  //grab the ul
  let parent = item.parentNode;
  let id = parent.id;
  // check if the item should go in the completed or if it should be re-added to todo by using  operator
  let target =
    id === "todo"
      ? document.getElementById("completed")
      : document.getElementById("todo");
  // remove the item to its current `ul`
  parent.removeChild(item);
  // add the item to the new `ul`
  target.insertBefore(item, target.childNodes[0]);
}

function removeItem() {
  //get the li
  let item = this.parentNode;
  //grab the ul
  let parent = item.parentNode;
  //remove child
  parent.removeChild(item);
}
