const inputValue = document.getElementById('taskCreator');
const taskContainer = document.querySelector('.task-container');


function createTask(){
    const task = document.createElement('DIV');
    task.classList.add('task');
    taskContainer.appendChild(task);

    const checkBtn = document.createElement('I');
    checkBtn.classList.add('fa-regular', 'fa-square', 'button-check')
    task.appendChild(checkBtn);

    const taskName = document.createElement('P');
    taskName.innerText = inputValue.value;
    task.appendChild(taskName);

    const deleteBtn = document.createElement('BUTTON');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    task.appendChild(deleteBtn);


    checkBtn.addEventListener('click', function(e){
        taskName.classList.toggle('check');
        if(checkBtn.classList.contains('button-check')){
            checkBtn.classList.remove('fa-square', 'button-check');
            checkBtn.classList.add('fa-square-check');
        }else if(checkBtn.classList.contains('fa-square-check')){
            checkBtn.classList.remove('fa-square-check');
            checkBtn.classList.add('fa-square', 'button-check');
        }
    })

    deleteBtn.addEventListener('click', function(e){
        const target = e.target;
        target.parentElement.parentElement.remove();
    })
}



{/* <div class="task">
    <i class="fa-regular fa-square button-check"></i>
    <p>texto</p>
    <button>
        <i class="fa-solid fa-trash"></i>
    </button>
</div> */}