// DOMContentLoaded-> ensures that the JS code runs only after the HTML doc has been fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // the const-> taking the HTML elements to be made actice via JS script
    const addTaskBtn = document.getElementById("add-btn");
    const newTask = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");

    // addEventListener-> sets up an event listener that listens for clicks on the "Add" button.
    addTaskBtn.addEventListener("click", () => {

        // get the value from the input field, trim any extra space (ie white space)
        const taskText = newTask.value.trim();

        // check of the input is not empty, then call "addTask" function
        if (taskText !== "") {
            addTask(taskText);
            newTask.value = ""; // clears the input field after.
        }
    });

    // same as the above one but instead of clicking the add button, it listens to when the enter key is pressed
    newTask.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const taskText = newTask.value.trim();

            if (taskText !== ""){
                addTask(taskText);
                newTask.value = "";
            }

        }
    });

    // This function creates a new list item (<li>), 
    //sets its text content to the task text, and prepares 
    //it for adding to the list.

    function addTask(taskText) {
        const li = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        // This line sets the text content of a newly created button (<button>) to the word "Delete"


        delBtn.addEventListener("click", () => {
            taskList.removeChild(li); // li is the child of taskList (task-list -> ul)
        });

        taskSpan.addEventListener("click", () => {
            taskSpan.classList.toggle("strikethrough");
        });



        // These lines add the delete button to the list item and then add the list item to the task 
        //list in the HTML.
        li.appendChild(delBtn);
        taskList.appendChild(li);
    }
});



