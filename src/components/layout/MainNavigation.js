import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return(
     <header className={classes.header}>
        <div className={classes.logo}>Task Manager</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Tasks</Link>
                </li>
                <li>
                    <Link to='/NewTask'>New Tasks</Link>
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