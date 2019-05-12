const React = require("react");
const API = require("../api/API");

class TopStories extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            storyList: []
        }
    }
  
    componentDidMount() {
        this.setState(() => {
            return {
                storyList: API()
            }
        })    
    }  
    
    
    render() {
    
    return (
        <div className="storiesContainer">Top Section</div>
    )
    
    }
}

module.exports = TopStories;