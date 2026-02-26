let count = 0;

let speechText = document.getElementById("speechText");
let countText = document.getElementById("count");

let recognition =
new (window.SpeechRecognition ||
window.webkitSpeechRecognition)();

recognition.continuous = true;

recognition.lang = "en-IN";


document.getElementById("startBtn")
.onclick = function(){

recognition.start();

}


document.getElementById("stopBtn")
.onclick = function(){

recognition.stop();

}


recognition.onresult = function(event){

let text =
event.results[event.results.length-1][0].transcript;

speechText.innerHTML = text;


let matches =
text.toLowerCase().match(/radhe radhe/g);

if(matches){

count += matches.length;

countText.innerHTML = count;

}

}