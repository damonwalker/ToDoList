import Card from '../ui/Card';
import classes from './TaskItem.module.css';
//this is how the task items will display to the screen
//once theh are rendered from the AllToDo{DummyData}
function TaskItem(props){

    return(
        <Card>
        <li className={classes.item}>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <date>{props.date}</date>
                <p>{props.taskType}</p>
                <p>{props.description}</p>
            </div>
        </li>
        </Card>

    )
}

export default TaskItem;