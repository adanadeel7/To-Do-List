const input = document.querySelector('.bar'); 
const button = document.querySelector('.plus'); 
const taskList = document.querySelector('.List'); 


button.addEventListener('click',function() { 
    const tasktext = input.value.trim(); 
    if (tasktext === "") { 
        return;
    }
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const taskSpan = document.createElement('span');
    checkbox.type = 'checkbox';
    taskSpan.textContent = tasktext; 
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    taskList.appendChild(li);
    input.value ='';
    

});