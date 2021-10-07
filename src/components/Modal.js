//import ToDo from "./ToDo";

function Modal (props) {
    function cancelHandler(){
        props.onCancel();
}
    function modalconfirmHandler(toDoData){
            props.onConfirm()
                    
}

    return(
    <div className='modal'>
        <p>Are you sure?</p>
        <button className='btn btn--alt' onClick={cancelHandler} >Cancel</button>
        <button className='btn' onClick={modalconfirmHandler} >Confirm</button>
    </div>
);
    }

export default Modal;