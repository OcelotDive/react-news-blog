const axios = require("axios");
//https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty

function getTopStoryList100() {
    return axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then(data => data.data.slice(0,100)); 
}


 function addComments(data){  
      data.data.kids.map(comment => {
               return axios.get("https://hacker-news.firebaseio.com/v0/item/"+comment+".json?print=pretty")
                    .then((comment,index, array) => {
                   //console.log(comment.data)
                    !data.data.comments ? data.data.comments = [] : null;
                   data.data.comments.push(comment.data);
                    
                   return comment  
               })
           })
      }


function getStories() {
    
  return  getTopStoryList100()
    .then(storyArray => { 
   return  storyArray.map(storyId => {
       return axios.get("https://hacker-news.firebaseio.com/v0/item/"+storyId+".json?print=pretty")
           .then(story => {
           if(story.data.kids){
            addComments(story);
           }
          // console.log(data)
           return story;
       });            
     })
   })   
}
/*findStoryComments().then(comments =>  {
    comments.slice(0,10)
    console.log(comments)
    comments.map(comment => {
        comment.then(data => {
            
            })
        })

})*/
  
   


function timeConvert(UNIX_timestamp){
  const a = new Date(UNIX_timestamp * 1000);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  let hour = a.getHours();
  if(hour < 10) hour = "0" + hour;
  let min = a.getMinutes();
  if(min < 10) min = "0" + min;
  let sec = a.getSeconds();
  if(sec < 10) sec = "0" + sec;
  const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}


const API = {
    timeConvert: timeConvert,
    getStories: getStories
}    


module.exports = API;