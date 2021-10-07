import { useState, useRef } from 'react';

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function ToDo(props){
    const toDoInputRef = useRef();
    const toDoDateRef = useRef();
    const toDoMedTaskType = useRef();
    const toDoBusTaskType = useRef();
    const toDoHomeTaskType = useRef();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function updateHandler(event){
        setModalIsOpen(true);
        event.preventDefault();

        const enteredTask = toDoInputRef.current.value;
        const enteredDate = toDoDateRef.current.value;
        const enteredMed = toDoMedTaskType.current.value;
        const enteredBus = toDoBusTaskType.current.value;
        const enteredHome = toDoHomeTaskType.current.value;

        const toDoData = {
            title: enteredTask,
            date: enteredDate, 
            medical: enteredMed,
            business: enteredBus,
            home: enteredHome,
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
    <div className = 'card'>
        <h1>{props.text}</h1>
        <div>
        <label htmlFor='title'>Task to do: </label>
        <br />
        <input type = 'text' required id='task' ref={toDoInputRef} />
        <br /> 
        <label htmlFor='title'>Date to complete task: </label>
        <br />
        <input type = 'date' required id='date' ref={toDoDateRef} />
        <div className = 'actions'>
        </div>
        <div className = 'actions'>
        </div>
       
        <br />
        <label htmlFor='title'>Medical</label>
        <input type ='checkbox' ref={toDoMedTaskType} />
        <label htmlFor='title'>Business</label>
        <input type ='checkbox' ref={toDoBusTaskType} />
        <label htmlFor='title'>Home</label>
        <input type ='checkbox' ref={toDoHomeTaskType} />
        <br />
        <button className = 'btn' onClick={updateHandler}>Update</button>
        <button className = 'btn' onClick={deleteHandler}>Delete</button>
        </div>

        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {modalIsOpen && <Backdrop  onCancel={closeModalHandler} />}
      </div>
);
    }

export default ToDo;