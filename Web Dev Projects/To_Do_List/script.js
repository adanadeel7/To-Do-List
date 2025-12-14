const input = document.querySelector('.bar'); 
const button = document.querySelector('.plus'); 
const taskList = document.querySelector('.task'); 

// Enter Click Functionality
button.addEventListener('click',function() { 
    const tasktext = input.value.trim(); 
    if (tasktext === "") { 
        alert("Please enter a task before adding it!");
        return;
    }
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const taskSpan = document.createElement('span');
     const close = document.createElement('button');
    checkbox.type = 'checkbox';
    close.textContent = 'X';
    taskSpan.textContent = tasktext; 
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(close);
    taskList.appendChild(li);
    input.value ='';
    
    

});
// Enter Functionality
document.addEventListener('keydown',function(event) { 
    const tasktext = input.value.trim(); 
    if (tasktext === "") { 
        if (event.key === 'Enter') {
            alert("Please enter a task before adding it!");
            return;
        }
    }
    if (event.key === 'Enter') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const taskSpan = document.createElement('span');
        const close = document.createElement('button');
        checkbox.type = 'checkbox';
        close.textContent = 'X';
        taskSpan.textContent = tasktext; 
        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(close);
        taskList.appendChild(li);
        
        input.value ='';
}
    

});


// Deleting Functionality 
taskList.addEventListener('click', function(e) { 
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'X') { 
        const ItemToDelete = e.target.closest('li'); 
        
        if (ItemToDelete) { 
            ItemToDelete.remove();
        }
    }
})

// Strike Through
taskList.addEventListener('change', function(e) { 
    if (e.target.type === 'checkbox') { 
        const LastItem = e.target.closest('li')

        LastItem.classList.toggle('completed');
    }
})

