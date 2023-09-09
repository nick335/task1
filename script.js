const DayTag = document.getElementById('day')
const timeTag= document.getElementById('time')
// get day function
function getDayName(){
 date = new Date() 
 locale = 'en-NG'
 return date.toLocaleDateString(locale, {weekday: 'long'})
}
// get currentUTCTime down to milliseconds
function GetCurrentUTCTime(){
 const now = new Date();
 const hours = now.getUTCHours()
 const minutes = now.getUTCMinutes()
 const seconds = now.getUTCSeconds()
 const milliseconds = now.getUTCMilliseconds()
 return `${hours}:${minutes}:${seconds}:${milliseconds}`
}
const day = getDayName()
const currentTime = GetCurrentUTCTime()
// diplay on html
DayTag.innerHTML = `Day of the week: ${day}`
timeTag.innerHTML = `currentUTCTime: ${currentTime}`

