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

module.exports = timeConvert;