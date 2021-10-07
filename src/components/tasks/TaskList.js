import TaskItem from './TaskItem';
import classes from './TaskList.module.css';
//this is a dynamic list of the task items from the AllToDo{DummyData} 
//this data is then passed to TaskItem to be displayed

function TaskList(props){
return(
<ul className={classes.list}>
{props.tasks.map((task) => (
    <TaskItem 
    key={task.id}
    id={task.id}
    title={task.title}
    date={task.date}
    taskType={task.taskType}
    description={task.description}
    />
))}
</ul>
);
}

export default TaskList;