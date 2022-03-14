const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#tasks");
const submitBtn = document.querySelector('#submit');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let task = taskInput.value.trim();

    if (task === '') {
        return;
    }

    let taskEl = document.createElement('div');
    taskEl.classList.add('task');

    let taskContentEl = document.createElement('div')
    taskContentEl.classList.add('content-task');

    taskEl.appendChild(taskContentEl);

    let taskInputEl = document.createElement('input');
    taskInputEl.classList.add('text');
    taskInputEl.type = 'text';
    taskInputEl.value = task;

    taskContentEl.appendChild(taskInputEl);

    let actionBtn = document.createElement('div');
    actionBtn.classList.add('action-btn');

    let taskDelete = document.createElement('button');
    taskDelete.classList.add('delete-btn');
    taskDelete.innerHTML = 'delete';


    actionBtn.appendChild(taskDelete);
    taskEl.appendChild(actionBtn);
    taskList.appendChild(taskEl);


    taskDelete.addEventListener('click', function () {
        taskList.removeChild(taskEl);
    })

    taskInput.value = "";

    console.log(task)

})


submitBtn.addEventListener('click', function () {
    let tasksAdded = JSON.parse(localStorage.getItem('tasksAdded')) || [];

    let tasksAdd = {
        taskList: taskInput.value
    }

    tasksAdded.push(tasksAdd);
    console.log(tasksAdded)

    localStorage.setItem('tasks', JSON.stringify(tasksAdded))
})

function displaytasks() {
    let addedTasks = JSON.parse(localStorage.getItem('tasksAdd'))


    if (addedTasks !== null) {
        tasksAdded = addedTasks
    }

}
displaytasks();