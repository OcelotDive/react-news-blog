const axios = require("axios");
//https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty

function getTopStoryList() {
    return axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then(data => data.data);
}


function findStory() {
    
  return  getTopStoryList()
    .then(storyArray => {
   return  storyArray.map(item => {
       return axios.get("https://hacker-news.firebaseio.com/v0/item/"+item+".json?print=pretty")
           .then(data => {
           return data;
       });            
     })
   })
    
}


    


module.exports = findStory;