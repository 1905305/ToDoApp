// Initialize an empty array to store tasks
let tasks = [];

function addTask() {
    // Get the input element where the user types the task
    const taskInput = document.getElementById('taskInput');

    // Get the text entered by the user, and remove extra spaces
    const taskText = taskInput.value.trim();

    // Check if the trimmed input is not an empty string
    if (taskText !== '') {
        // Add the valid task to the tasks array
        tasks.push(taskText);

        // Call the function to update and display the tasks on the screen
        displayTasks();

        // Clear the input box for the next task
        taskInput.value = '';
    }
}

function displayTasks() {
    // Get the element where the list of tasks will be shown
    const taskList = document.getElementById('taskList');

    // Clear any previously displayed tasks
    taskList.innerHTML = '';

    // Loop through the tasks array and create a list item for each task
    tasks.forEach((task, index) => {
        // Create a new <li> element
        const li = document.createElement('li');

        // Set the text of the list item to the task
        li.textContent = task;

        // Add the list item to the task list on the page
