//- Elementi utilizzati in HTML in const, ovvero, var di js
const textArea = document.querySelector('textarea');
const playButton = document.querySelector('button');
const pitchBar = document.querySelector('input');
const duckFigure= document.querySelector('figure');

//-- Tasto Play cliccato, esegui la seguente funzione
playButton.addEventListener('click', function() {
    const textLength = textArea.value.trim().length;

    if (textLength > 0) {
        //-- Paperella parla
        talk();    
    }

})
//-- Funzione per far parlare la paperella
function talk() {
    //-- Prendere la textarea e la pitch bar
    const text = textArea.value;
    const pitch = pitchBar.value;

    //--2 Preparo frase per sintetizzatore
    const utterance = new SpeechSynthesisUtterance(text);

    //--3 Specifichiamo altri dettagli
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = pitch;

    //-- Paperella parla
    speechSynthesis.speak(utterance);

    //-- Quando la paperella inizia a parlare

    utterance.addEventListener('start', function(){

        //-- Blocchiamo i controlli
        textArea.disabled = true;
        pitchBar.disabled = true;
        playButton.disabled = true;

        //-- Animiamo paperella
        duckFigure.classList.add('talking');
        
    });

    //-- Paperella finisce di parlare

    utterance.addEventListener('end', function(){

        //-- Sblocchiamo i controlli
        textArea.disabled = false;
        pitchBar.disabled = false;
        playButton.disabled = false;

        //-- Paperella statica
        duckFigure.classList.remove('talking');
    });

}