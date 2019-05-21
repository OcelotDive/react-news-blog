const React = require("react");
const API = require("../api/API");
const PropTypes = require("prop-types");
const Loader = require("./Loader");
const timeConvert = require("../util/timeConvert");
const createMarkup = require("../util/createMarkup");
const ListItems = require("./ListItems");
const ThemeConsumer = require("../util/theme").ThemeConsumer;
function UserDataUI({data, postList}) {
    
   return (
       <ThemeConsumer>
       {({theme}) => (
       <div>
        <h1 className="newsItemTitle">{data.id}</h1>
        <span className="infoText">Joined: <span className={"infoSubject"+theme}>
            {timeConvert(data.created)}
            </span>
        </span>
        <span className="infoText"> Karma: <span className={"infoSubject"+theme}>
            {data.karma}
            </span>
        </span>
        <div className={"aboutUser"+theme}dangerouslySetInnerHTML={createMarkup(data.about)}></div>
        <h2 className={"userPostTitle"+theme}>POSTS</h2>
            <div className={"storiesContainer"+theme}>
              <ListItems storyList={postList}/>     
            </div>
       </div>
        )}
       </ThemeConsumer>
       )
}

class UserPosts extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = true;
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
                if(this._isMounted){
                this.setState(() => {
                    return {
                        userData: userData
                    }
                })
        }
            // fetch user posts
        API.getUserPosts(this.state.userData.submitted)
            .map(item => {
            item.then(post => {
                userPosts.push(post);
                userPosts = userPosts.filter(post => {
                  return !post.dead && !post.deleted && post.type === "story";  
                })
                if(this._isMounted){
                this.setState(() => {
                    return {
                        userPosts: userPosts
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
        const loaderMessage = "Loading user posts";
        
        return ( 
            <ThemeConsumer>
            {({theme}) => (
             
            <div>
               {this.state.userPosts ? <UserDataUI data={this.state.userData} postList={this.state.userPosts}/> : <Loader text={loaderMessage} /> }
            </div>
            )}
            </ThemeConsumer>

        )

    }
}


module.exports = UserPosts;
