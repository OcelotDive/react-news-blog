const React = require("react");
const API = require("../api/API");
const PropTypes = require("prop-types");
const Loader = require("./Loader");
const ListItems = require("./ListItems");
const ThemeConsumer = require("../util/theme").ThemeConsumer;

class NewStories extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = true;
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
        const loaderMessage = "Loading latest posts"
    return (
        <ThemeConsumer>
        {({theme}) => (
        <div className={"storiesContainer"+theme}>
        {data.length < 1 ? <Loader text={loaderMessage}/> : <ListItems storyList={data}/>}
        </div>
        )}
        </ThemeConsumer>
    )
    
    }
}


module.exports = NewStories;