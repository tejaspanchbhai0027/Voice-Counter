let count = 0;
let isListening = false;

let speechText = document.getElementById("speechText");
let countText = document.getElementById("count");

let recognition =
new (window.SpeechRecognition ||
window.webkitSpeechRecognition)();

recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = "en-IN";


document.getElementById("startBtn").onclick = function(){

isListening = true;
recognition.start();

}


document.getElementById("stopBtn").onclick = function(){

isListening = false;
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


recognition.onend = function(){

// Auto restart if Start was pressed

if(isListening){

recognition.start();

}

}
