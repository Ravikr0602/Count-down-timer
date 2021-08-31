var a = new Date();
var b = a.getTime();
// change time below code (day*hour*minutes)
var total = b + (2*24*3600000);
function count()
{
 var now = new Date();
 var currentTime = now.getTime();
 
  var diff = total - currentTime;
  var sec = Math.floor(diff/1000);
  var min = Math.floor(sec/60);
  var hour = Math.floor(min/60);
  var day = Math.floor(hour/24);

 hour = hour%24;
 min = min%60;
 sec = sec%60;

 hour=(hour<10)?"0"+hour:hour;
 min=(min<10)?"0"+min:min;
 sec=(sec<10)?"0"+sec:sec;
 day=(day<10)?"0"+day:day;  
 
 document.getElementById("days").innerHTML=day;
 document.getElementById("hours").innerHTML= hour;
 document.getElementById("minutes").innerHTML= min;
 document.getElementById("seconds").innerHTML= sec;
 setTimeout(count,1000);
}
count();