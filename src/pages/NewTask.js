import NewTaskForm from "../components/tasks/NewTaskForm";
//import ToDo from "../components/ToDo";

function NewTask() {
      function confirmTaskHandler(toDoData){
        fetch('https://taskmanager-344f8-default-rtdb.firebaseio.com/task.json',
        {
            method: 'POST',
            body: JSON.stringify(toDoData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );
      }  

    return (
    <section>
        <h1>Add New Task</h1>
    <NewTaskForm confirmHandler={confirmTaskHandler}/> 
    </section>
    );
}

export default NewTask;