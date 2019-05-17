const React = require("react");
const NavLink = require('react-router-dom').NavLink;
const timeConvert = require("../util/timeConvert");

function SubHeaderInfo({item}) {
   
     return(
        <div>
            <span className="infoText">By: <span className="infoSubject" style={{textDecoration: "underline"}}>
                <NavLink  to={"/user/" + item.by}>
                {item.by}
                </NavLink>
                </span>
                </span>
                <span className="infoText"> Date: <span className="infoSubject">{timeConvert(item.time)}</span>                             
                </span>
                <span className="infoText"> Comments: <span className="infoSubject" style={{textDecoration: "underline"}}>
                 {item.kids ?   
                <NavLink  to={{pathname: "/comments/" + item.id.toString(),state: {itemData: item}}}>
                    {item.kids.length}
                </NavLink>
                : "0"}
                </span>
                </span>
                <span className="infoText"> Rating: <span className="infoSubject">{item.score}</span>
            </span>
        </div>
     )
}

module.exports = SubHeaderInfo;