const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Redirect = ReactRouter.Redirect;
const Switch = ReactRouter.Switch;
const NavBar = require("./NavBar");
const TopStories = require("./TopStories");
const NewStories = require("./NewStories");
const Comments = require("./Comments");
const UserPosts = require("./UserPosts");
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
            <Route exact path="/top" component={TopStories} />
            <Route exact path="/latest" component={NewStories} />
            <Route exact path="/comments/:id" component={Comments} />
            <Route  path="/user/comments/:id" component={Comments} />
            <Route  path="/user/:id" component={UserPosts} />
            
        </ Switch>
        </section>
        </ Router>
        )
    }
    
}

module.exports = App;