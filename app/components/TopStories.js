const React = require("react");
const API = require("../api/API");
const timeConvert = require("../util/timeConvert");
const PropTypes = require("prop-types");
const NavLink = require('react-router-dom').NavLink;
const Loader = require("./Loader");
function ListItems(props) {
    
    return (
        <ul className="storiesList">
        {props.storyList.map(item => {
         return (
            <li key={item.id} className="newsItem">
            <a href={item.url} target="_blank"><div className="newsItemTitle">{item.title}</div></a>
            <span className="infoText">By: <span className="infoSubject">{item.by}</span></span><span className="infoText"> Date: <span className="infoSubject">{timeConvert(item.time)}</span></span>
            <span className="infoText"> Comments: <span className="infoSubject"><NavLink activeClassName="navActive Active" to="/comments">{item.kids && item.kids.length}</NavLink></span></span>
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
      
        API.getStories().then(dataArray => {
            const list = [];
           
            dataArray.map(obj => {
                return obj.then(item => {
                  
                  list.push(item.data)
                    
                   // console.log(item.data)
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
        {data.length < 100 ? <Loader /> : <ListItems storyList={data}/>}
        </div>
        
    )
    
    }
}


module.exports = TopStories;