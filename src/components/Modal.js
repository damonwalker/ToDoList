//import ToDo from "./ToDo";

function Modal (props) {
    function cancelHandler(){
        props.onCancel();
}
    function confirmHandler(toDoData){
            props.onConfirm(
                    fetch('https://taskmanager-344f8-default-rtdb.firebaseio.com/task.json',
                {
                    method: 'POST',
                    body: JSON.stringify(toDoData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                ));
}

    return(
    <div className='modal'>
        <p>Are you sure?</p>
        <button className='btn btn--alt' onClick={cancelHandler} >Cancel</button>
        <button className='btn' onClick={confirmHandler} >Confirm</button>
    </div>
);
    }

export default Modal;