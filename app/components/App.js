const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const NavBar = require("./NavBar");
const TopStories = require("./TopStories");

//set the route component where you want a specific component displayed
//after navigating to that path
//Switch renders on specific route that is not an active route eg 404
//routes will work for links on imported components
class App extends React.Component {
    
render() {
    return(
        <Router>
        <section className="outerContainer">
        <NavBar />
        <Switch>
            <TopStories />
        </ Switch>
        </section>
        </ Router>
        )
    }
    
}

module.exports = App;