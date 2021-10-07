import { Link } from 'react-router-dom';
function MainNavigation() {
    return(
     <header>
        <div>Task Manager</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Tasks</Link>
                </li>
                <li>
                    <Link to='/NewToDo'>New Tasks</Link>
                </li>
                <li>
                    <Link to='/Categories'>Tasks Categories</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation;