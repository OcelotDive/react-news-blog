const React = require("react");
const API = require("../api/API");
const PropTypes = require("prop-types");
const Loader = require("./Loader");
const ListItems = require("./ListItems");


class TopStories extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            storyList: []
        }
        
    }

    componentDidMount() {
        const keyword = "topstories";
        API.getStories(keyword).then(dataArray => {
            const list = [];
           
            dataArray.map(obj => {
                return obj.then(item => {
                  
                  list.push(item.data)
                  list.sort((a,b)=> b.score - a.score) 
                  
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
        const loaderMessage = "Loading top posts";
    return (
        <div className="storiesContainer">
        {data.length < 100 ? <Loader text={loaderMessage}/> : <ListItems storyList={data}/>}
        </div>
        
    )
    
    }
}


module.exports = TopStories;