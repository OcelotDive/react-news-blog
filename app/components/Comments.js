const React = require("react");
const API = require("../api/API");
const timeConvert = require("../util/timeConvert");
const createMarkup = require("../util/createMarkup");
const NavLink = require('react-router-dom').NavLink;
const SubHeaderInfo = require("./SubHeaderInfo");
const Loader = require("./Loader");
const axios = require("axios");
const ThemeConsumer = require("../util/theme").ThemeConsumer;
function CommentUI({postData, comments}) {
   
   
    
    return (
    <ThemeConsumer>
        {({theme}) => (
     <div>
        <SubHeaderInfo item={postData} />
        <br/>
        {comments && comments.map(comment => {
         return (
            <div className={"commentContainer"+theme} key={comment.id}>
            <span className="infoText">By: <span className="infoSubject" style={{textDecoration: "underline"}}><NavLink  to={"/user/" + comment.by}>{comment.by}</NavLink></span></span><span className="infoText"> On: <span className="infoSubject">{timeConvert(comment.time)}</span></span>
            <div className={"commentBody"+theme} id="commentText" dangerouslySetInnerHTML={createMarkup(comment.text)}></div>
            </div> 
            
         )
        })}
    
     </div>
        )}
    </ThemeConsumer>
    )
}


 class Comments extends React.Component {
     
    constructor(props) {
        super(props)
       this._isMounted = true;
        this.state = {
            comments: this.props.location.state.itemData.kids,
            resolvedComments: null
        }
    }
    
    
    componentDidMount() {
    
        let resolvedCommentsArray = []
        API.getComments(this.state.comments).map(pending => pending.then(comment => {
            resolvedCommentsArray.push(comment.data);
             if(this._isMounted){
            this.setState(()=> {
              return {resolvedComments: resolvedCommentsArray}
            }) 
             }
        }))   
        
    }
     
    componentWillUnmount() {
       this._isMounted = false;  
    }                                                                     
     
     render() {
         const data = this.props.location.state.itemData;
         const loaderMessage = "Loading comments"
    return (
    <div>
    <h1 className="newsItemTitle">{data.title}</h1>
        {this.state.comments.length > 0 ? <CommentUI postData={this.props.location.state.itemData} comments={this.state.resolvedComments} /> : <Loader text={loaderMessage} />}
    </div>
    )
     }
}

module.exports = Comments;