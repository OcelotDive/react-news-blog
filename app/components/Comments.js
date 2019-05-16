const React = require("react");
const API = require("../api/API");
const timeConvert = require("../util/timeConvert");
const createMarkup = require("../util/createMarkup");
const NavLink = require('react-router-dom').NavLink;
const SubHeaderInfo = require("./SubHeaderInfo");
const axios = require("axios");

function CommentUI({postData, comments}) {
   
   
    
    return (
     <div>
        <SubHeaderInfo item={postData} />
        <br/>
        {comments && comments.map(comment => {
         return (
            <div className="commentContainer" key={comment.id}>
            <span className="infoText">By: <span className="infoSubject" style={{textDecoration: "underline"}}><NavLink  to={"/user/" + comment.by}>{comment.by}</NavLink></span></span><span className="infoText"> On: <span className="infoSubject">{timeConvert(comment.time)}</span></span>
            <div className="commentBody" id="commentText" dangerouslySetInnerHTML={createMarkup(comment.text)}></div>
            </div>
         )
        })}
    
     </div>
    )
}


 class Comments extends React.Component {
     
    constructor(props) {
        super(props)
       
        this.state = {
            comments: this.props.location.state.itemData.kids,
            resolvedComments: null
        }
    }
    
    
    componentDidMount() {
    
        let resolvedCommentsArray = []
        API.getComments(this.state.comments).map(pending => pending.then(comment => {
            resolvedCommentsArray.push(comment.data);
            
            this.setState(()=> {
              return {resolvedComments: resolvedCommentsArray}
            })      
        }))   
    }
     

     
     render() {
         const data = this.props.location.state.itemData;
         
    return (
    <div>
    <h1 className="newsItemTitle">{data.title}</h1>
    <CommentUI postData={this.props.location.state.itemData} comments={this.state.resolvedComments}/>
    </div>
    )
     }
}

module.exports = Comments;