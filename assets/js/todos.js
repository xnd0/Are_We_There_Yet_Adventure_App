const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#tasks");
const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('.reset-btn')

let tasksAdded = [];

function rendertasks() {

    taskList.textContent = '';
    for (let i = 0; i < tasksAdded.length; i++) {




        let taskEl = document.createElement('div');
        taskEl.classList.add('task');

        let taskContentEl = document.createElement('div')
        taskContentEl.classList.add('content-task');

        taskEl.appendChild(taskContentEl);

        let taskInputEl = document.createElement('input');
        taskInputEl.classList.add('text');
        taskInputEl.type = 'text';
        taskInputEl.value = tasksAdded[i];

        taskContentEl.appendChild(taskInputEl);

        let actionBtn = document.createElement('div');
        actionBtn.classList.add('action-btn');

        let taskDelete = document.createElement('button');
        taskDelete.classList.add('delete-btn');
        taskDelete.innerHTML = 'delete';


        // actionBtn.appendChild(taskDelete);
        taskEl.appendChild(actionBtn);
        taskList.appendChild(taskEl);

        taskInput.value = "";

        console.log(tasksAdded[i])

    }


}


submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    tasksAdded.push(taskInput.value);
    console.log(tasksAdded)

    localStorage.setItem('tasks', JSON.stringify(tasksAdded))
    rendertasks();
})

function displaytasks() {
    let addedTasks = JSON.parse(localStorage.getItem('tasks'))


    if (addedTasks !== null) {
        tasksAdded = addedTasks
    }
    rendertasks();

}
displaytasks();

resetBtn.addEventListener('click', clearStorage2)

function clearStorage2() {
    localStorage.clear();
    location.reload();
}