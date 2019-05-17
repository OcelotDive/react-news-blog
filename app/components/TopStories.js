const React = require("react");
const API = require("../api/API");
const PropTypes = require("prop-types");
const Loader = require("./Loader");
const ListItems = require("./ListItems");



class TopStories extends React.Component {
    
    constructor(props) {
        super(props);
        this._isMounted = true;
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
                 if(this._isMounted){
                     
                    this.setState(()=> {
                        return {
                            storyList: list
                        }
                    })
                 }
                })   
            })  
        }) 
        
    }  
    
    componentWillUnmount() {
        
       this._isMounted = false;
       
    }
    
    render() {
        const data = this.state.storyList;
        const loaderMessage = "Loading top posts";
    return (
        <div className="storiesContainer">
        {data.length < 20 ? <Loader text={loaderMessage}/> : <ListItems storyList={data}/>}
        </div>
        
    )
    
    }
}


module.exports = TopStories;

