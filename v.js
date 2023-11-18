// Created by vedantK
// vedant is just adding some telgu words because he wants to lern this laungage,enjoy my project
alert("wlcome to vedants project ");
alert("dont took msg so seriously this is only for fun perpose hope you understand and as well free to chat with VEDSBOT beCOZ even vedant cant able to see your msg");

window.onload = function(){
    var z = document.getElementById("today");
    z.style.opacity=0;
    var y = document.getElementById("data");
    data.value="";
    clock();
document.getElementById("num").style.top="-8px";
document.getElementById("status").innerHTML=lastseen;


}
var lastseen;
var time;
var date;
var day;
var msg;
var replyy;
var SENDER_FIRST = true;
var RECIEVER_FIRST = true;



var clickAudio = new Audio("https://dl.dropboxusercontent.com/s/mx4nr71jc8zlyxb/Message%20sent%20sound.mp3?dl=0");
clickAudio.preload="auto";

var recievedAudio = new Audio("https://dl.dropboxusercontent.com/s/404y5t6x35uyw8j/message%20recieved%20sound.mp3?dl=0");
recievedAudio.preload="auto";






function send() {
    
    
    var data = document.getElementById("data");
    
    if (data.value=="")
    { return }
    clickAudio.play();
    
    msg=data.value;
    var mess=data.value;
    
    
    
    
    var body = document.getElementById("body");
    //test.style.marginBottom="5%";
    var message = document.createElement("div");
    message.setAttribute('id','message');
    var bubble2 = document.createElement("div");
    bubble2.setAttribute('id','sen_bubble');
    var table = document.createElement("table");
    table.setAttribute('id','msgtable');
    var tr = document.createElement("tr");
    var messagetext = document.createElement("td");
    messagetext.setAttribute('id','messagetext');
    messagetext.innerHTML = data.value;
    var senttime = document.createElement("td");
    senttime.setAttribute('id','senttime');
    senttime.innerHTML = time;
    var ticks = document.createElement("td");
    ticks.setAttribute('id','ticks');
    
    var seen = document.createElement("img");
    seen.setAttribute('id','seen');
    seen.className = 'seen';
    
     if (mess.length <=3)
     {  message.style.marginLeft="70%";
        messagetext.style.width="35%";
        senttime.style.width="60%";
     
      }
    
    if (mess.length > 3 && mess.length <= 5)
     {message.style.marginLeft="70%";
      messagetext.style.width="50%";
      senttime.style.width="45%";
     }
     
    if (mess.length > 5 && mess.length <= 10)
     {message.style.marginLeft="60%";
      messagetext.style.width="40%%";
      senttime.style.width="55%";
     }
    
    if (mess.length > 10 && mess.length <= 15)
     {message.style.marginLeft="50%";
      messagetext.style.width="55%";
      senttime.style.width="40%";
     } 
    
    if (mess.length > 15 && mess.length <= 20)
     {message.style.marginLeft="40%";
      messagetext.style.width="300px";
      senttime.style.width="75px";
     } 
    
    if (mess.length > 20)
     {message.style.marginLeft="30%";
      messagetext.style.width="300px";
      senttime.style.width="75px%";
     } 

    seen.src="https://i.ibb.co/DWMJB63/1623426181617.png";
    
    table.append(tr);
    tr.append(messagetext);
    tr.append(senttime);
    tr.append(ticks);
    ticks.append(seen);
    if(SENDER_FIRST)
    {
    message.append(bubble2);
    SENDER_FIRST = false;
    }
    RECIEVER_FIRST = true;
    message.append(table);
    
    body.append(message);

    data.value = "";
    check();
    
    var z = document.getElementById("today");
    z.style.opacity=1;
    window.scrollBy(0,50000);
    setTimeout(blueticks,1000);
    
    setTimeout(online,1200);
    
    setTimeout(typing,2000);
    
}

var yyy="";
var xxx=0;

function reply() {
    
    online();
    
var data = document.getElementById("data");
    //window.scrollBy(0,50000);
    replyy = "";
    
    
var hi = ["Hello from mr vedant ", "Hii from mr vedant", "Hi,from mr vedant, Nice to meet you"];

var emdoing = ["chating with you","pls once check your browsing history vedant  says🤣🤣"," nothing,your phone got hacked😂😂😂 vedant is kidding with u?🤫","nothing"];

var love = [" vedant ,Loves you too ❤️❤️❤️","Love you  😭 Vedant loves you"," vedant,Loves you my dear friend 😉","i think u likes me already😜"];

var ha = ["your rating for chating with me🤭🤭","If possible send me a screenshot of my chat(Original Number Ki)","pls check your browser history  🤫","giving","Haha"]

var bye = ["now Bye aa from vedant ♥️🙄","Be with you Everytime vedant will be your strength","Bye aa if ur not intrested 😒","okay as you wish  😈","dear support  vedant 🤭"]

var vedant = ["hey vedant here 😉","hey vedant here hello🤭🤭","He's My Owner 😘","😁😁😁😁😁"];

var tinnava= ["have vedant ever eaten without you😉","Ha Just Now 😋","vedant waiting for u to put it😝","Ha you"]

var gf = [" We have kept the space that someone will come","if you are there then i will not be there 😜","Present his phone is vedants Gf 🤭","i will provide you all stuff that you wanna "]

var ammo= ["ha true 😂","move forward  and same to u😁","ohoo god","Ayya baboi 😂"]

var how = ["yaa vedant is good what about you😉","they say yes when i asked 😝","vedant will not tell u","tell yourself","let vedant  tell you later","i dont think i need to say if i pace it"]

var nijam= ["Haa dont belive it vedants says","dont trust vedant","people tell wrong you can share things with vedant","Haha yes","What you believe to be true becomes a lie and what you believe to be a lie becomes true"]

var enti= ["what is meaning of my name?","dont you know","Things that should not be done knowingly","step aside"];



var defaulT = ["Ohh","vedant likes you 😂","Apart","yooo","🫡","good","vedant dont know that yet","forgot","Haha"]


var himsg;
var emdoingmsg;
var lovemsg;
var byemsg;
var tinnavamsg;
var gfmsg;
var vedantmsg;
var hamsg;
var ammomsg;
var howmsg;
var nijammsg;
var entimsg;


replyy = "";

if( msg.search(/Hi/i) != -1 || msg.search(/Hai/i) != -1 || msg.search(/hello/i) != -1 && replyy == "")
{
    himsg = true;
    replyy = "Hiiii from vedant";
    
}

if( msg.search(/em/i) != -1 || msg.search(/doing/i) != -1 || msg.search(/chestunnav/i) != -1 ||
msg.search(/chestunav/i) != -1 || msg.search(/emi/i) != -1 || msg.search(/chestnav/i) != -1 && replyy == "")
{
    emdoingmsg = true;
    replyy = "chatting with u";
}

if( msg.search(/like/i) != -1 || msg.search(/gf/i) != -1 || msg.search(/love you/i) != -1 ||
msg.search(/love/i) != -1 || msg.search(/143/i) != -1 || msg.search(/girl/i) != -1 && replyy == "")
{
    lovemsg = true;
    replyy = "Love you too";
}

if( msg.search(/bye/i) != -1 || msg.search(/by/i) != -1 || msg.search(/Bai/i) != -1 ||
msg.search(/Tata/i) != -1 || msg.search(/See/i) != -1 || msg.search(/CU/i) != -1 && replyy == "")
{
    byemsg = true;
    replyy = "thats the bye";
}


if( msg.search(/j1/i) != -1 || msg.search(/food/i) != -1 || msg.search(/jevan/i) != -1 ||
msg.search(/dinner/i) != -1 || msg.search(/breakfast/i) != -1 || msg.search(/lunch/i) != -1
|| msg.search(/eaten/i) != -1 && replyy == "")
{
    tinnavamsg = true;
    replyy = "Ha i ate";
}



if( msg.search(/lover/i) != -1 || msg.search(/gf/i) != -1 || msg.search(/girlfriend/i) != -1 ||
msg.search(/love story/i) != -1 || msg.search(/ammay/i) != -1 || msg.search(/girl/i) != -1 && replyy == "")
{
    gfmsg = true;
    replyy = "you are there";
}


if( msg.search(/vedant/i) != -1 || msg.search(/owner/i) != -1 || msg.search(/boss/i) != -1 ||
msg.search(/Tata/i) != -1 || msg.search(/reply/i) != -1 || msg.search(/rules/i) != -1 && replyy == "")
{
    vinaymsg = true;
    replyy = " vedant here ";
}



if( msg.search(/Haa/i) != -1 || msg.search(/Hmm/i) != -1 || msg.search(/thik aahe/i) != -1 ||
msg.search(/Ok/i) != -1 || msg.search(/Ho/i) != -1 || msg.search(/Hmm/i) != -1 || msg.search(/k/i) != -1 || msg.search(/Kk/i) != -1 || msg.search(/Okay/i) != -1 && replyy == "")
{
    hamsg = true;
    replyy = "what else"
}


if( msg.search(/oh my god/i) != -1 || msg.search(/baboi/i) != -1 || msg.search(/oh nok/i) != -1 ||
msg.search(/vammo/i) != -1 || msg.search(/vayabbo/i) != -1 || msg.search(/wow/i) != -1 || msg.search(/wtf/i) != -1 || msg.search(/fuck/i) != -1 || msg.search(/abbo/i) != -1 && replyy == "")
{
    ammomsg = true;
    replyy = "Mari movolgundadu mantho";
}

if( msg.search("Ela") != -1 || msg.search(/How/i) != -1 || msg.search(/cheppu/i) != -1 ||
msg.search(/reply/i) != -1 || msg.search(/enti/i) != -1 || msg.search(/yela/i) != -1 && replyy == "")
{
    howmsg = true;
    replyy = "Cheppanu brother";
}

if( msg.search(/nijam/i) != -1 || msg.search(/really/i) != -1 || msg.search(/avuna/i) != -1 ||
msg.search(/sollu/i) != -1 || msg.search(/cheppura/i) != -1 || msg.search(/rey/i) != -1 && replyy == "")
{
    nijammsg = true;
    replyy = "avunuu nijam";
}

if( msg.search("what") != -1 || msg.search(/enti/i) != -1 || msg.search(/yenti/i) != -1 ||
msg.search(/entoo/i) != -1 || msg.search(/yentra/i) != -1 || msg.search(/entra/i) != -1 && replyy == "")
{
    entimsg = true;
    replyy = "Sudden ga enti ante em cheptaam edokti ";
}







if (himsg)
{
let len = (hi.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = hi[chnum];
}


if (emdoingmsg)
{
let len = (emdoing.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = emdoing[chnum];
}


if (lovemsg)
{
let len = (love.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = love[chnum];
}


if (byemsg)
{
let len = (bye.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = bye[chnum];
}


if (tinnavamsg)
{
let len = (tinnava.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = tinnava[chnum];
}


if (gfmsg)
{
let len = (gf.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = gf[chnum];
}



if (vedantmsg)
{
let len = (vedant.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = (vinay[chnum]);
}

if (hamsg)
{
let len= (ha.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = (ha[chnum]);
}

if (ammomsg)
{
let len= (ammo.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = (ammo[chnum]);
}

if (howmsg)
{
let len= (how.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = (how[chnum]);
}

if (nijammsg)
{
let len= (nijam.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = (nijam[chnum]);
}

if (entimsg)
{
let len= (enti.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = (enti[chnum]);
}


if (replyy == "")
{
/*if(xxx==0)
{

navigator.getBattery().then(function(battery) {

perc = battery.level*100;

temp(perc);

});

replyy = yyy;
xxx+=1;
}
else
{ */
let len= (defaulT.length-1);
let chnum = Math.floor((Math.random()*len));
replyy = (defaulT[chnum]);
window.scrollBy(0,50000);

}



/* 
😁😆😅😂🤣🙂🙃😉😌😍🥰😘😋😝😜🤪🤨🥳🤩😒🥺😳😱🤬🤫🤭🤔🙄🥴😴😭☹️😢😎😚😈👻👊💪🤟✌️👋🙏
*/
    var body = document.getElementById("body");
    
    var message = document.createElement("div");
    message.setAttribute('id','reply');
    if(replyy.length < 10)
    {
        message.style.width="60%";
    }

    var table = document.createElement("table");
    var bubble = document.createElement("div");
    bubble.setAttribute('id','rec_bubble');
    var tr = document.createElement("tr");
    var messagetext = document.createElement("td");
    messagetext.setAttribute('id','messagetext2');
    messagetext.innerHTML = replyy;
    var senttime = document.createElement("td");
    senttime.setAttribute('id','senttime2');
    senttime.innerHTML = time;
    
    
    table.append(tr);
    tr.append(messagetext);
    tr.append(senttime);
    if(RECIEVER_FIRST)
    {
    message.append(bubble);
    RECIEVER_FIRST = false;
    }
    SENDER_FIRST = true;
    message.append(table);
    
    body.append(message);
    
    navigator.vibrate(0.1*1000);
    
}



function clock() {
var d = new Date();
sd = String(d);
time = sd.slice(16,21);

lastmin = Number(time.slice(3,5));

if(lastmin<=9)
{
    lastmin="0"+lastmin;
}
lastseen = time.slice(0,3).concat("",lastmin);
let ampm = (lastseen.slice(0,2));

if(ampm > 12)
{
let h = Number(lastseen.slice(0,2))-12;
time = time.slice(2);
time = h+time;
lastseen = lastseen.slice(2);
lastseen = String(h)+lastseen;
lastseen += ' pm';
time += ' pm';
}
else
{
    lastseen += ' am';
    time +=' am'
}

lastseen = "last seen today at "+lastseen;
date = sd.slice(4,16);
day = sd.slice(0,3);
setTimeout(clock,1000);
}


function blueticks() {
   
var image = document.getElementsByClassName("seen");
let i=0;
while (i<image.length) {
image[i].src="https://i.ibb.co/qsfbFBQ/1623426201770.png";
i++;
}

}

function typing() {
   document.getElementById("status").innerHTML="typing...";
   setTimeout(reply,2000);
}

function online() {
    document.getElementById("status").innerHTML="online";
   
}


function check() {
    var x = document.getElementById("data").value;
    var y = document.getElementById("mic");
    if(x == "")
    {
        y.src = "https://i.ibb.co/FK02KRm/1623237639167.png";
    }
    else
    {
        y.src = "https://i.ibb.co/hZ9s7Xk/1623238845958.png";
    }
}


function temp(percentage)
{
    if(percentage > 50)
    {yyy = " 50 more than ";}
    else
    {yyy = "50 less than";}
    alert(yyy)
}


function sound() {
    clickAudio.play();
}

function disable() {
let vocall = document.getElementById("voicecall");
let vicall = document.getElementById("videocall");
let options1 = document.getElementById("options");
let options2 = document.getElementById("options2");
let blank = document.getElementById("blank");
    vocall.style.display ="none";
    vicall.style.display ="none";
    options1.style.display="none";
    options2.style.display="none";
    blank.style.display ="none";
}



function voicecall() {
    sound();
    var blank = document.getElementById("blank");
    blank.style.opacity="0.5";
    var voiceCalll = document.getElementById("voicecall");
    blank.style.display="block";
    voiceCalll.style.display="block";
}

function videocall() {
    sound();
    var blank = document.getElementById("blank");
    blank.style.opacity="0.5";
    var voiceCalll = document.getElementById("videocall");
    blank.style.display="block";
    voiceCalll.style.display="block";
}

function options() {
    sound();
    let opt = document.getElementById("options");
    let blank = document.getElementById("blank");
    blank.style.display="block";
    blank.style.opacity="0";
    opt.style.display="block";
    
}

function options2() {
    sound();
    let opt = document.getElementById("options");
    let opt2 = document.getElementById("options2");
    let blank = document.getElementById("blank");
    blank.style.display="block";
    blank.style.opacity="0";
    opt.style.display="none";
    opt2.style.display="block";
}

function block() {
    sound();
    swal({

  title: "Cannot Block",

  text: "You cannot block the owner of vedsapp becoz owner is vedant",

  type: "error",

  confirmButtonText: "Back",

});
   disable();
}





/*


https://i.ibb.co/zXhFd47/1623303238616.png


https://i.ibb.co/pwnPqvn/1623303087228.png


var body = document.getElementById("body");
    var message = document.createElement("div");
    var msgdiv = document.createElement("div");
    var timediv = document.createElement("div");
    message.setAttribute('id','message');
    msgdiv.setAttribute('id','msgdiv');
    timediv.setAttribute('id','timediv');
    
    
    var text = data.value;
    
    var p = document.createElement("p");
    p.setAttribute('id','messagetext');
    p.innerHTML = text;
    
    var h6 = document.createElement("h6");
    h6.setAttribute('id','senttime');
    h6.innerHTML = time;
    
    
    msgdiv.append(p);
    timediv.append(h6);
    message.append(msgdiv);
    message.append(timediv);
    body.appendChild(message);
    

//creating a new paragraph
    var p = document.createElement("p");
    var node = document.createTextNode("Some new text");
    //adding the text to the paragraph
    p.appendChild(node);

    var div = document.getElementById("demo");
    //adding the paragraph to the div
    div.appendChild(p);


<img id="stickers" src="https://i.ibb.co/3T9vPWS/1623240304838.png"/> */