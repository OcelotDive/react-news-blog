const React = require('react');
const NavLink = require('react-router-dom').NavLink;

function NavBar() {
    
    return (
        <ul className="navBar">
            <li>
                <NavLink activeClassName="navActive" to={{pathname: "/top",state: {list: "top"}}}>
                 Top
                </ NavLink>
            </li>
            <li>
            <NavLink activeClassName="navActive" to={{pathname: "/latest",state: {list: "latest"}}}>
             Latest
            </ NavLink>
            </li>
 
          
        </ul>
    )
}

module.exports = NavBar;