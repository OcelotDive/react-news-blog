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
               //add comments to the story object
            addComments(story);
           }
          // console.log(data)
           return story;
       });            
     })
   })   
}

  
   



const API = {
    getStories: getStories
}    


module.exports = API;