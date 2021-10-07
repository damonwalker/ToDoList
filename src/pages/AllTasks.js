import TaskList from '../components/tasks/TaskList';
//this is where the data/props are being pulled from and then sent to the list
const DummyData = [
{
    id: 'm1',
    title: 'My first task',
    date: '10/01/2021',
    taskType: 'Yes',
    description: 'this is the song that never ends'
},
{
    id: 'm2',
    title: 'My second task',
    date: '11/01/2021',
    taskType: 'Yes',
    description: 'fiesta fiesta'
},
{
    id: 'm1',
    title: 'My third task',
    date: '12/01/2021',
    taskType: 'Yes',
    description: 'aint nothing but a g thang baby'
},
];

function AllTasks(){
return (
    <section>
    <h1>All Tasks Page</h1>
    <TaskList tasks={DummyData} />
    </section>
)
}

export default AllTasks;