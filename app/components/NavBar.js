const React = require('react');
const NavLink = require('react-router-dom').NavLink;
const ThemeConsumer = require("../util/theme").ThemeConsumer;
function NavBar() {
    
    return (
        <ThemeConsumer>
        {({ theme }) => (
        <ul className={"navBar"+theme}>
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
        )}
        </ThemeConsumer>
    )
}

module.exports = NavBar;