// let specch = new SpeechSynthesisUtterance();

// document.querySelector("button").addEventListener("click", ()={
//     specch.text = document.querySelector("textarea").value
//     window.SpeechSynthesis.speak(specch)
// })

let specch = new SpeechSynthesisUtterance();

let voices = []
let voicesSelect = document.querySelector("select")

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    specch.voice = voices[0];

    voices.forEach((voice, i) => (voicesSelect.options[i] = new Option(voice.name, i)));
}

voicesSelect.addEventListener("change", ()=>{
    specch.voice = voices[voicesSelect.value]
})

document.querySelector("button").addEventListener("click", () => {
    specch.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(specch);
});
