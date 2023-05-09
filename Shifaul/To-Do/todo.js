const newItemInput = document.getElementById("new-item-input");
const addItemBtn = document.getElementById("add-item-btn");
const toDoList = document.getElementById("to-do-list");

addItemBtn.addEventListener("click", function() {
  const newItemText = newItemInput.value;

  if (newItemText === "") {
    return; 
  }

  const newItem = document.createElement("li");
  newItem.innerHTML = `
    <span>${newItemText}</span>
    <button>Delete</button>
  `;

  toDoList.appendChild(newItem);

  newItemInput.value = "";

  const deleteBtn = newItem.querySelector("button");
  deleteBtn.addEventListener("click", function() {
    newItem.remove();
  });
});

newItemInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addItemBtn.click(); 
  }
});
