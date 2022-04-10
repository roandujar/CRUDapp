let task;
let tasks=[];
let tasks2;
let tasksE = document.getElementById("task-list");

class Unit {
    constructor (title, details){
        this.title = title;
        this.details = details;
    }
}

document.getElementById("task-form").addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
    readTask();
    document.getElementById("task-form").reset();
});

function addTask(){
    JSON.parse(localStorage.getItem(tasks))
    title = document.getElementById("task-name").value;
    details = document.getElementById("task-details").value;
    const taskUnit = new Unit (title, details)

    if(title == '' || details == ''){
        alert ("Por favor insertar tarea con su descripción")
    } else {
        if (JSON.parse(localStorage.getItem(tasks)) == null){
            tasks.push(taskUnit);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } else {
            tasks.JSON.parse(localStorage.getItem('tasks'))
            tasks.push(taskUnit);
            localStorage.setItem('tasks', JSON.stringify(tasks));   
        }
    }
    showMessage('Tarea agregada satisfactoriamente', 'success')
}

function readTask(){
    tasksE.innerHTML='';
    tasks2=JSON.parse(localStorage.getItem('tasks'));
    if(tasks2!=null){
        for (let i=0; i<tasks2.length; i++) {
            tasksE.innerHTML+= `<div class="border border-success card mb-2">
            <div class="card-body">
                <p>Tarea: ${tasks2[i].title}</p>
                <p>Descripción: ${tasks2[i].details}</p>
                <button class="col-1 btn btn-warning" onclick="updateTask(${i})"><i class="fas fa-edit"></i> Editar</button>
                <button class="col-1 btn btn-danger" onclick="deleteTask(${i})"><i class="fas fa-trash"></i> Borrar</button>
            </div>
            </div>`
        }
    }
}

function updateTask(i3){
    let tasks3 = JSON.parse(localStorage.getItem('tasks'));
    tasksE.innerHTML='';
    for (let i = 0; i < tasks3.length; i++) {
        if(i==i3){
                tasksE.innerHTML+=`<div class="border border-success card mb-2">
                <div class="card-body">
                    <p>Tarea:</p>
                    <input class="mb-2 form-control" id="newTask" placeholder="${tasks3[i].title}">
                    <p>Descripción:</p>
                    <input class="mb-2 form-control" id="newDetails" placeholder="${tasks3[i].details}">
                    <button class="col-1 btn btn-success" onclick="update2(${i})"><i class="fas fa-edit"></i> Actualizar</button>
                    <button class="col-1 btn btn-danger" onclick="readTask()"><i class="fas fa-ban"></i> Cancelar</button>
                </div>
            </div>
                `
            } else{
                tasksE.innerHTML+=`<div class="border border-success card mb-2">
                <div class="card-body">
                    <p>Tarea: ${tasks2[i].title}</p>
                    <p>Descripción: ${tasks2[i].details}</p>
                    <button class="col-1 btn btn-success" onclick="updateTask(${i})"><i class="fas fa-edit"></i> Editar</button>
                    <button class="col-1 btn btn-danger" onclick="deleteTask(${i})"><i class="fas fa-trash"></i> Borrar</button>
                </div>
                </div>
                `

            }
    }
}

function update2(i){
    let tasks4 = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks4);
    tasks4Title=document.getElementById("newTask").value;
    tasks4Details=document.getElementById("newDetails").value;

    const taskUnitUpdate = new Unit (tasks4Title, tasks4Details);
    console.log(taskUnitUpdate);

    if (taskUnitUpdate.title == '' || taskUnitUpdate.details == ''){
        alert ("Por favor insertar tarea con su descripción")
    } else{
        tasks4[i] = taskUnitUpdate;
        localStorage.setItem('tasks', JSON.stringify(tasks4));
        readTask();
    }
}

function deleteTask(i2){
    let tasks5 = JSON.parse(localStorage.getItem('tasks'));
    tasks5.splice(i2,1);
    localStorage.setItem('tasks', JSON.stringify(tasks5));
    readTask();
    showMessage('Tarea borrada satisfactoriamente', 'info')
}

function showMessage(message, cssClass) {
    const divme = document.createElement('div');
    divme.className = `alert alert-${cssClass} mt-2`;
    divme.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const app = document.querySelector('#app');
    container.insertBefore(divme, app);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000)
}