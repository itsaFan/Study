import MainNav from "./MainNav"
import classes from './Layouts.module.css';

const Layout = (props) => {
    return (
        <div>
            <MainNav className="navbar" />
            <main className={classes.main}>
            {props.children}
            </main>
        </div>
    )
};

export default Layout;