//call window object speech recognition..
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


//To create html element and insert new element
var p = document.createElement("p");
var words = document.getElementById("words");
words.appendChild(p);
console.log(words);



recognition.addEventListener("result", (e) =>                           //dom method to listen event
{
    console.log(e.results);
    var transcript = [...e.results].map(result => result[0]).map(result => result.transcript).join("");

    if(e.results[0].isFinal)
    {
        p = document.createElement("p");
        words.appendChild(p);
        p.innerHTML = transcript;

    }


    // console.log(transcript);
    p.innerHTML = transcript ;
});


recognition.addEventListener('end', recognition.start);
recognition.start();        //starting speech recognition.
