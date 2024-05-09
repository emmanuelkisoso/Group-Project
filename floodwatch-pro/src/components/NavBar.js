import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './styles.css'


function NavBar() {
    return(
        <nav className="nav">
            <Link to="/" className="site-title">FloodWatch</Link>
            <ul>
                <CustomLink to="/tips" className="link1">Tips</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return(
        <li className={ isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default NavBar