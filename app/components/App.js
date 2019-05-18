const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Redirect = ReactRouter.Redirect;
const Switch = ReactRouter.Switch;
const ThemeProvider = require("../util/theme").ThemeProvider;
const ThemeConsumer = require("../util/theme").ThemeConsumer;
const NavBar = require("./NavBar");
const TopStories = require("./TopStories");
const NewStories = require("./NewStories");
const Comments = require("./Comments");
const UserPosts = require("./UserPosts");
const ThemeImage = require("./ThemeImage");
//set the route component where you want a specific component displayed
//after navigating to that path
//Switch renders on specific route that is not an active route eg 404
//routes will work for links on imported components

class App extends React.Component {
   state = {
    theme: 'Light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'Light' ? 'Dark' : 'Light'
      }))
    }
  }
render() {

    return(
        <Router>
        <ThemeProvider value={this.state}>
        <ThemeConsumer>
        {({ theme, toggleTheme }) => (
        <section className={"page"+theme}>
        <section className="outerContainer">
        <ThemeImage />
        <NavBar />
        
        <Switch>
            <Route exact path="/top" component={TopStories} />
            <Route exact path="/latest" component={NewStories} />
            <Route exact path="/comments/:id" component={Comments} />
            <Route  path="/user/comments/:id" component={Comments} />
            <Route  path="/user/:id" component={UserPosts} />
            <Redirect to="/top" />
        </ Switch>
        </ section>
        </section>
        )}
        </ ThemeConsumer>
        </ ThemeProvider>
        </ Router>
        )
    }
    
}

module.exports = App;