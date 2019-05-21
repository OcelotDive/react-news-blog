const React = require("react");
const light = require("../images/light.png");
const dark = require("../images/dark.png");
const bulbOn = require("../images/on.png");
const bulbOff = require("../images/off.png");
const ThemeConsumer = require("../util/theme").ThemeConsumer;


class ThemeImage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            switchOnOff: false
            
            
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(()=> {
              return {switchOnOff: !this.state.switchOnOff}
            }) 
      
        
       
    }
    
  
    render() {
       
        return (
            <ThemeConsumer>
            {({ theme, toggleTheme }) => (
            <div>
                {theme === "Light" ? 
                <div className="themeContainer" onClick={()=>{this.handleClick(), toggleTheme()}}><img src={light} className="switchLight"/><img src={bulbOn} className="switchLight2"/></div>
                : 
                <div className="themeContainer" onClick={() =>{this.handleClick(), toggleTheme()}}><img src={dark} className="switchLight"/><img src={bulbOff} className="switchLight2"/></div> }
            </div>
            )}
            </ThemeConsumer>
        )
    }
}

module.exports = ThemeImage;