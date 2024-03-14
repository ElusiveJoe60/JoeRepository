const form = document.querySelector('#form')
const taskInput = document.querySelector('#task-input')
const tasksList = document.querySelector('.tasksList')
const emptyList = document.querySelector('.emptyList')

form.addEventListener('submit', addTask)

tasksList.addEventListener('click', deleteTask)

tasksList.addEventListener('click', doneTask)

function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value

    if (!taskText) {
        alert('Заметка пустая')
    } else {
    const taskHTML = `
                <li class="filledList">
                    <span class="task-object">${taskText}</span>
                    <div class="task-buttons">
                        <button type="button" data-action="done" class="agree-button">
                            <img class="agree-image" src="/images/tick.svg" alt="Сделано">
                        </button>
                        <button type="button" data-action="delete" class="delete-button">
                            <img class="delete-image" src="/images/cross.svg" alt="Удалить">
                        </button>
                    </div>
                </li>
    `

    tasksList.insertAdjacentHTML('beforeend', taskHTML)

    taskInput.value = ""
    taskInput.focus()

    if (tasksList.children.length > 0) {
        emptyList.classList.add('none')
    }
    }   
}

function deleteTask(event) {
    if (event.target.dataset.action === 'delete') {
        const parentNode = event.target.closest('.filledList')
        parentNode.remove()
    }

    if (tasksList.children.length == 1) {
        emptyList.classList.remove('none')
    }
}

function doneTask(event) {
    if (event.target.dataset.action === 'done') {
        const parenNode = event.target.closest('.filledList')
        const taskObject = parenNode.querySelector('.task-object')
        taskObject.classList.toggle('task-object--done')
    }
}