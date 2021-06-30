document.getElementById("add-task").addEventListener("click", function () {
    let taskInput = document.getElementById("task-value");
    if (taskInput.value == "") {
        alert('Please input the task')
    }else {
    addTask(taskInput.value)
    taskInput.value = ""
    }
  });
  //---------------
  function addTask(taskValue) {
    let task = document.createElement("li");
    task.classList.add("task");
    task.classList.add("fill");
    task.setAttribute("draggable", "true");
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
  
    var taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskContent.innerText = taskValue;
  
    var trash = document.createElement("div");
    trash.classList.add("trash");
    trash.innerHTML = "&times;";
    trash.addEventListener("click", removeTask);
  
    task.appendChild(taskContent);
    task.appendChild(trash);
  
    var tasks = document.getElementById("tasks-added");
    tasks.insertBefore(task, tasks.childNodes[0]);
  }
  
//---------------
function removeTask(event) {
    // event represents the remove button
    // Access the <ul> list by moving 2 levels up
    var tasks = event.target.parentNode.parentNode;
    // Access the <li> element which is the direct parent
    var task = event.target.parentNode;
    tasks.removeChild(task);
  }
  
  // DRAG & DROP
  
  // A global variable to store the selected task
  var task;
  
  function dragStart(event) {
    event.target.classList.add('hold');
    task = event.target;
    setTimeout( function() { 
       event.target.classList.add('invisible')
    }, 0);
   }
  
  function dragEnd(event) {
    event.target.classList.remove("invisible");
  }
  document.getElementsByTagName(`body`).addEventListener("click", function(event) {
      alert(event.target.nodeName);
  })