import React, { useState } from 'react';
import Calendar from "react-calendar";

function NewToDoForm() {
    const [value , onChange] = useState(new Date());
return (
<form>
<div>
    <label htmlFor='title'>To Do Title</label>
    <input type="text" required id='title' ></input>
</div>
<div>
    <label htmlFor='date'>Date to Complete</label>
    <Calendar onChange={onChange} value={value}/> 
</div>
</form>
);
}

export default NewToDoForm;
