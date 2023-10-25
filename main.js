//Get HTML Elements
const inputTask = document.querySelector(".inputTask");
console.log(inputTask);
const addBtn = document.querySelector(".addBtn");
console.log(addBtn);
const tasksCon = document.querySelector(".tasks");
console.log(tasksCon);


//check if the taskCon is empty or not
function isTasksEmpty() {
    if (tasksCon.children.length == 0) {
        tasksCon.classList.add("none");
    } else {
        tasksCon.classList.remove("none");
    }
}

//Focus on input Field
window.onload = () => {
    inputTask.focus();
    isTasksEmpty();

}


//Click On addBtn
addBtn.addEventListener("click", () => {
    if (inputTask.value != "") {
        addTask(inputTask.value);
        inputTask.value = "";
        inputTask.focus();
    }
});




//Function add Task
function addTask(inputVal) {
    //call createTaskDiv Fct
    createTaskDiv(inputVal);

    //display the tasksCon block
    tasksCon.classList.remove("none");

    //click On DeletBtn
    delBtns = document.querySelectorAll(".deleteBtn");
    delBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.target.parentElement.remove();
            isTasksEmpty();
        })
    });
    // isDone();
    //Double Click On taskDiv
    const taskDIvs = document.querySelectorAll(".tasks .task");
    taskDIvs.forEach(task => {
        task.addEventListener("dblclick", (e) => {
            // e.target.classList.toggle("done");I wonder why toggle class doesn't work with dbclick
            e.target.classList.add("done");
        });
    });
}

//Function that creates a task div
function createTaskDiv(inputVal) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    const pTask = document.createElement("p");
    pTask.textContent = inputVal;
    taskDiv.append(pTask);
    const delBtn = document.createElement("button");
    delBtn.className = "deleteBtn";
    delBtn.textContent = "delete";
    taskDiv.append(delBtn);
    tasksCon.append(taskDiv);
}