document.addEventListener('DOMContentLoaded', function () {
    // Get the task list container
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    window.addTask = function () {
        const newTaskInput = document.getElementById('new-task');
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            // Create a new list item
            const listItem = document.createElement('li');
            listItem.innerHTML = `${taskText} <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>`;

            // Add the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            newTaskInput.value = '';
        }
    };

    // Function to delete a task
    window.deleteTask = function (element) {
        const listItem = element.parentElement;
        taskList.removeChild(listItem);
    };

    // Function to edit a task
    window.editTask = function (element) {
        const listItem = element.parentElement;
        const taskText = listItem.firstChild.nodeValue.trim();
        const newTaskText = prompt('Edit task:', taskText);

        if (newTaskText !== null) {
            listItem.firstChild.nodeValue = newTaskText.trim();
        }
    };
});
