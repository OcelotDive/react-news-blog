const axios = require("axios");
//https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty

function getTopStoryList() {
    return axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then(data => data.data);
}


function findStory() {
    const dataArray = [];
    getTopStoryList()
    .then(storyArray => {
     storyArray.map(item => {
       return axios.get("https://hacker-news.firebaseio.com/v0/item/"+item+".json?print=pretty")
           .then(data => {
           dataArray.push(data);
       });            
     })
   })
    return dataArray;
}




module.exports = findStory;