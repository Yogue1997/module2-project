import { Link } from 'react-router-dom'

function Nav() {


    const underline = {
        textDecoration: "none",
        color: "white",
    }

    return (
        <div className="navbar">
            <Link to='home' style={underline}>
                <h1 id="logo">⚽</h1>
            </Link>
            <ul className="nav">
                <Link to='home' style={underline}>
                    <li>Home</li>
                </Link>
                <Link to='about' style={underline}>
                    <li>About</li>
                </Link>
                <Link to='players' style={underline}>
                    <li>Players</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav;