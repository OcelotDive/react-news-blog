const React = require("react");
const API = require("../api/API");
const PropTypes = require("prop-types");

function ListItems(props) {

    return (
        <ul>
        {props.storyList.map(item => {
         return (
            <li>
            {item}
            </li>
         ) 
        })}
        </ul>
    )
}

class TopStories extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            storyList: []
        }
        
    }
  
    componentDidMount() {
      
        API().then(dataArray => {
            const list = [];
            dataArray.map(obj => {
                return obj.then(item => {
                  list.push(item.data)
                    this.setState(()=> {
                        return {
                            storyList: list
                        }
                    })
                })   
            })  
        }) 
    }  
    
    
    render() {
        const data = this.state.storyList;
      
    return (
        <div className="storiesContainer">
        <div>{JSON.stringify(data)}</div>
        </div>
        
    )
    
    }
}


module.exports = TopStories;