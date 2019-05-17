const React = require("react");
const SubHeaderInfo = require("./SubHeaderInfo");

function ListItems(props) {
    //dynamic routing via id comments path name and passing state object
   
    return (
        <ul className="storiesList">
        {props.storyList.length === 0 && <div>No posts yet.</div>}
        {props.storyList.map(item => {
         return (
            <li key={item.id} className="newsItem">
            <a href={item.url} target="_blank">
            <h3 className="newsItemTitle">{item.title}</h3>
            </a>
           <SubHeaderInfo item={item} />
        </li>
         ) 
        })}
        </ul>
    )
}

module.exports = ListItems