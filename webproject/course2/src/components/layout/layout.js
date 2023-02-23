import MainNav from "./MainNav"

const Layout = (props) => {
    return (
        <div>
            <MainNav className="navbar" />
            <div>{props.children}</div>
        </div>
    )
};

export default Layout;