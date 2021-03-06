const axios = require("axios");


function getTopStoryList100(keyword) {
    if(!keyword) source.cancel("operation cancelled")
    return axios.get("https://hacker-news.firebaseio.com/v0/"+keyword+".json?print=pretty")
    .then(data => data.data.slice(0,50))  
   
}




function getComments(commentArray) {
    return commentArray.map(commentID => {
        return axios.get("https://hacker-news.firebaseio.com/v0/item/"+commentID+".json?print=pretty")
                .then(comment => {
                return comment;
    })
    })
}

function getStories(keyword) {
    
  return  getTopStoryList100(keyword)
    .then(storyArray => { 
   return  storyArray.map(storyId => {
       return axios.get("https://hacker-news.firebaseio.com/v0/item/"+storyId+".json?print=pretty")
           .then(story => {
           return story;
       });            
     })
   })   
}


function getUserData(userId) {
    return axios.get("https://hacker-news.firebaseio.com/v0/user/"+userId+".json?print=pretty")
    .then(data => data.data)
  
}

function getUserPosts(postArray) {
    return postArray.map(postId => {
        return axios.get("https://hacker-news.firebaseio.com/v0/item/"+postId+".json?print=pretty")
                .then(postItem => postItem.data);
    }).slice(0,50)
            
}


const API = {
    getStories: getStories,
    getComments: getComments,
    getUserData: getUserData,
    getUserPosts: getUserPosts
   

  
    
}    


module.exports = API;