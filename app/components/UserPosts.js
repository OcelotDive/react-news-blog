const React = require("react");
const API = require("../api/API");
const PropTypes = require("prop-types");
const Loader = require("./Loader");
const ListItems = require("./ListItems");


class TopStories extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
           
        }
        
    }

    componentDidMount() {
      
    }  
    
    
    render() {
    
    return (
        <div className="storiesContainer">user posts
        {data.length < 0 ? <Loader text={loaderMessage}/> : <ListItems storyList={data}/>}
        </div>
        
    )
    
    }
}


module.exports = TopStories;
