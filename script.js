function addTask() {
    var input = document.getElementById("new-task");
    var task = input.value;
    
    if (task.trim() !== "") {
      var list = document.getElementById("todo-list");
      var newItem = document.createElement("li");
      newItem.appendChild(document.createTextNode(task));
      list.appendChild(newItem);
      input.value = "";
    }
  }
  