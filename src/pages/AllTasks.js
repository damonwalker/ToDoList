import { useState, useEffect } from 'react';
import TaskList from '../components/tasks/TaskList';
//this is where the data/props are being pulled from and then sent to the list


function AllTasks(){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedTasks, setLoadedTasks] = useState([]);
    
    useEffect(() => {
        setIsLoading(true);
        fetch('https://taskmanager-344f8-default-rtdb.firebaseio.com/task.json')
        .then((response) => {
            return response.json();
        })
        .then(data => {
            const tasks =[]; // transform the object data from the database to an array

            for (const key in data){
                const task = {
                    id: key,// key is the serial number of the data in firebase
                    ...data[key] // spread operator... for all data in the key
                };

                tasks.push(task); // push the data to a new array
            }
                setIsLoading(false);
                setLoadedTasks(tasks)
        });
    },  []); // this array is used to check for values in the database/array/dependencies
    
        if(isLoading){
            return (
                <section>
                    <p>Loading...</p>
                </section>
            )
        }
return (
    <section>
    <h1>All Tasks Page</h1>
    <TaskList tasks={loadedTasks} />
    </section>
)
}

export default AllTasks;