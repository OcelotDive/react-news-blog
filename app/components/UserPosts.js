const React = require("react");
const API = require("../api/API");
const PropTypes = require("prop-types");
const Loader = require("./Loader");
const timeConvert = require("../util/timeConvert");
const createMarkup = require("../util/createMarkup");
const ListItems = require("./ListItems");
function UserDataUI({data, postList}) {
    
   return (
       <div>
        <h1 className="newsItemTitle">{data.id}</h1>
        <span className="infoText">Joined: <span className="infoSubject">
            {timeConvert(data.created)}
            </span>
        </span>
        <span className="infoText"> Karma: <span className="infoSubject">
            {data.karma}
            </span>
        </span>
        <div className="aboutUser"dangerouslySetInnerHTML={createMarkup(data.about)}></div>
        <h2>POSTS</h2>
              <ListItems storyList={postList}/>                                             
       </div>
       )
}

class UserPosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: null,
            userPosts: null
        }

    }

    componentDidMount() {
        //fetch user id
        const user = this.props.match.params.id
        let userPosts = [];
        API.getUserData(user)
            .then(userData => {

                this.setState(() => {
                    return {
                        userData: userData
                    }
                })
            // fetch user posts
        API.getUserPosts(this.state.userData.submitted)
            .map(item => {
            item.then(post => {
                userPosts.push(post);
                userPosts = userPosts.filter(post => {
                  return !post.dead && !post.deleted && post.type === "story";  
                })
                
                this.setState(() => {
                    return {
                        userPosts: userPosts
                    }
                })
            })
        })
            
            
        })   
    }

  
    render() {
        const loaderMessage = "Loading user posts";
    
        return ( 
            <div className="storiesContainer">
               {this.state.userPosts ? <UserDataUI data={this.state.userData} postList={this.state.userPosts}/> : <Loader loaderMessage={loaderMessage} /> }
            </div>

        )

    }
}


module.exports = UserPosts;
