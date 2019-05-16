const React = require("react");
const API = require("../api/API");
const PropTypes = require("prop-types");
const Loader = require("./Loader");
const ListItems = require("./ListItems");

class NewStories extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            storyList: []
        }
        
    }

    componentDidMount() {
        const keyword = "newstories";
        API.getStories(keyword).then(dataArray => {
            const list = [];
           
            dataArray.map(obj => {
                return obj.then(item => {
                  
                  list.push(item.data)
                  list.sort((a,b)=> b.time - a.time) 
                  
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
        const loaderMessage = "Loading latest posts"
    return (
        <div className="storiesContainer">
        {data.length < 20 ? <Loader text={loaderMessage}/> : <ListItems storyList={data}/>}
        </div>
        
    )
    
    }
}


module.exports = NewStories;