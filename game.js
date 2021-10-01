var x=0;
var i=0;
function fn2()
{alert("Welcome to the Hunt game! The rules are simple: Find all 15 hidden objects to win! (Timer starts as soon as you press OK and ends when you find object 15)");}
var seconds=-1,minutes=0,hours=0,watch;
watch=setInterval(timer,1000);
function timer() {
        seconds++;
        if(seconds<10&&minutes<10)
        document.getElementById("tmr").innerText=`\u00a0 0${hours}:0${minutes}:0${seconds}`;
        else if(seconds>=10&&minutes<10)
        document.getElementById("tmr").innerText=`\u00a0 0${hours}:0${minutes}:${seconds}`;
        else if(seconds<10&&minutes>=10)
        document.getElementById("tmr").innerText=`\u00a0 0${hours}:${minutes}:0${seconds}`;
        else if(seconds>=10&&minutes>=10)
        document.getElementById("tmr").innerText=`\u00a0 0${hours}:${minutes}:${seconds}`;
        if(seconds==59){
            minutes++;
            seconds=-1;
        }
        if(minutes==59) {
            hours++;
            minutes=0;
        }
if(x==15)
return;
}

function fn() {
    x++;
    i++;
    if(i%2==0)
    document.getElementById("ctr").style="float:right; font-family: calibri; color: fuchsia";
    else if(i%2!=0&&i!=15)
    document.getElementById("ctr").style="float:right; font-family: calibri; color: aqua;";
    document.getElementById("ctr").innerText="Counter : "+i +"\u00a0"+"\u00a0" ;
    while(i<=15) {
        if(i==1) {
        alert("You have found the " +i+ "st object!"); break;}
        else if(i==2) {
        alert("You have found the " +i+ "nd object!"); break;}
        else if(i==3) {
        alert("You have found the " +i+ "rd object!"); break;}
        else {
        alert("You have found the " +i+ "th object!"); break;}
    }
    if(x==15) {
        alert("You have found all 15 objects! Congratulations on winning the game, Thanks for playing!");
        document.getElementById("ctr").style="float:right; font-family: calibri; color: lime";
        document.getElementById("img").style="border-radius: 6px; width: 1143px; height: 660px; border: 8px solid; border-color: lime";
        document.getElementById("a").style="color:lime; font-family:calibri; font-weight: bold; text-align: center";
        if(seconds<10)
        document.getElementById("a").innerHTML="\u00a0Time Taken: 0"+hours+":0" +minutes+":0"+seconds+"\u2002|\u2002You've Won! (Counter:15)";
        else if(seconds>=10&&minutes<10)
        document.getElementById("a").innerHTML="\u00a0Time Taken: 0"+hours+":0" +minutes+":"+seconds+"\u2002|\u2002You've Won! (Counter:15)";
        else if(seconds>=10&&minutes>=10)
        document.getElementById("a").innerHTML="\u00a0Time Taken: 0"+hours+":" +minutes+":"+seconds+"\u2003|\u2002You've Won! (Counter:15)";
        document.getElementById("img").src="11.jpg";
    }


}