const React = require("react");
const light = require("../images/light.png");
const dark = require("../images/dark.png");
const bulbOn = require("../images/on.png");
const bulbOff = require("../images/off.png");



class ThemeChanger extends React.Component {
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
        console.log(this.state.switchOnOff)
        
    }
    
  
    render() {
        
        return (
            <div>
                {!this.state.switchOnOff ?  
                <div className="themeContainer" onClick={this.handleClick}><img src={light} className="switchLight"/><img src={bulbOn} className="switchLight2"/></div>
                : 
                <div className="themeContainer" onClick={this.handleClick}><img src={dark} className="switchLight"/><img src={bulbOff} className="switchLight2"/></div> }
            </div>
        )
    }
}

module.exports = ThemeChanger;