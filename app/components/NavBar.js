const React = require('react');
const NavLink = require('react-router-dom').NavLink;

function NavBar() {
    
    return (
        <ul className="navBar">
            <li>
                <NavLink activeClassName="navActive" to="/top">
                 Top
                </ NavLink>
            </li>
            <li>
            <NavLink activeClassName="navActive" to="/Latest">
             Latest
            </ NavLink>
            </li>
        </ul>
    )
}

module.exports = NavBar;