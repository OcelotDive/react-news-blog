const React = require("react");
const NavLink = require('react-router-dom').NavLink;
const timeConvert = require("../util/timeConvert");

function ListItems(props) {
    //dynamic routing via id comments path name and passing state object
    return (
        <ul className="storiesList">
        {props.storyList.map(item => {
       
         return (
            <li key={item.id} className="newsItem">
            <a href={item.url} target="_blank"><h3 className="newsItemTitle">{item.title}</h3></a>
            <span className="infoText">By: <span className="infoSubject">{item.by}</span></span><span className="infoText"> Date: <span className="infoSubject">{timeConvert(item.time)}</span></span>
            <span className="infoText"> Comments: <span className="infoSubject" style={{textDecoration: "underline"}}><NavLink activeClassName="navActive" to={{pathname: "./comments/" + item.id.toString(),state: {itemData: item}}}>{item.kids && item.kids.length}</NavLink></span></span>
            <span className="infoText"> Rating: <span className="infoSubject">{item.score}</span></span>
            </li>
         ) 
        })}
        </ul>
    )
}

module.exports = ListItems