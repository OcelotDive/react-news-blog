const React = require("react");
const API = require("../api/API");
const PropTypes = require("prop-types");
const Loader = require("./Loader");
const timeConvert = require("../util/timeConvert");
const createMarkup = require("../util/createMarkup");

function UserDataUI({data}) {
    
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
       </div>
       )
}

class UserPosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: null
        }

    }

    componentDidMount() {
        const user = this.props.match.params.id
     
        API.getUserData(user)
            .then(userData =>

                this.setState(() => {
                    return {
                        userData: userData
                    }
                })
            )   
   
    }
    componentDidUpdate() {
        API.getUserPosts(this.state.userData.submitted)
    }
  
    render() {
        console.log(this.state.userData);
        const loaderMessage = "Loading user posts";
        return ( 
            <div className="storiesContainer">
               {this.state.userData ? <UserDataUI data={this.state.userData}/> : <Loader loaderMessage={loaderMessage} /> }
            </div>

        )

    }
}


module.exports = UserPosts;
