import classes from './NewTaskForm.module.css';
import { useState, useRef } from 'react';

import Modal from '../Modal';
import Backdrop from "../Backdrop";
import Card from '../ui/Card';

function NewTaskForm(props){
    const toDoInputRef = useRef();
    const toDoDateRef = useRef();
    const toDoMedTaskType = useRef();
    const toDoBusTaskType = useRef();
    const toDoHomeTaskType = useRef();
    const toDoDescription = useRef();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function updateHandler(event){
        setModalIsOpen(true);
        event.preventDefault();

        const enteredTask = toDoInputRef.current.value;
        const enteredDate = toDoDateRef.current.value;
        const enteredMed = toDoMedTaskType.current.value;
        const enteredBus = toDoBusTaskType.current.value;
        const enteredHome = toDoHomeTaskType.current.value;
        const enteredDescription = toDoDescription.current.value;

        const toDoData = {
            title: enteredTask,
            date: enteredDate, 
            medical: enteredMed,
            business: enteredBus,
            home: enteredHome,
            description: enteredDescription,
        };

       props.confirmHandler(toDoData);
    }
    

    

    function deleteHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false)
    }
    
return (
    <Card>
        <form className={classes.form}>
        <div className={classes.control}>
        <label htmlFor='title'>Task to do: </label>
        <input type = 'text' required id='title' ref={toDoInputRef} />
        <label htmlFor='date'>Date to complete task: </label>
        <input type = 'date' required id='date' ref={toDoDateRef} />
        <label htmlFor='medical'>Medical</label>
        <input type ='checkbox' id='medical' ref={toDoMedTaskType} />
        <label htmlFor='business'>Business</label>
        <input type ='checkbox' id='business' ref={toDoBusTaskType} />
        <label htmlFor='home'>Home</label>
        <input type ='checkbox' id='home' ref={toDoHomeTaskType} />
        <label htmlFor='desription'>Home</label>
        <textarea id='description' required rows='5' ref={toDoDescription} />
        <button className={classes.actions} onClick={updateHandler}>Update</button>
        <button className={classes.actions} onClick={deleteHandler}>Delete</button>
      

        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {modalIsOpen && <Backdrop  onCancel={closeModalHandler} />}
      </div>
      </form>
      </Card>
);
}

export default NewTaskForm;
