//Global constants
//const clueHoldTime = 1000; //how long to hold each clue's light sound --changed to a variable
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const gameLength = 8;


//Global Variables
//var pattern = [1, 2, 4, 6, 5, 3, 6, 2, 5]; --changed in generatePattern so the pattern is not constant
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var numOfMistakes = 0;


function startGame() {
    //initialize game variables  
    progress = 0;
    gamePlaying = true;
    generatePattern(); // Set random pattern
    console.log(pattern);
    numOfMistakes = 0;
    displayMistakes();
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
  
    playClueSequence();
}


function stopGame() {
    //Reset variables back to initial state
    gamePlaying = false;
    clueHoldTime = 1000;
    pattern = [];
    numOfMistakes = 3;
    displayMistakes();
  
    //Start and Stop buttons go back to original state
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
  
}


function lightButton(btn) {
    document.getElementById("button"+btn).classList.add("lit")
}


function clearButton(btn) {
    document.getElementById("button"+btn).classList.remove("lit")
}


function playSingleClue(btn) {
    if(gamePlaying){
      lightButton(btn);
      playTone(btn,clueHoldTime);
      setTimeout(clearButton,clueHoldTime,btn);
    }
}


function playClueSequence() {
    let delay = nextClueWaitTime; //set delay to initial wait time
    guessCounter = 0;
  
    for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
      console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
      setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
      delay += clueHoldTime 
      delay += cluePauseTime;
      
      clueHoldTime -= 15;
    }
}


function loseGame() {
    stopGame();
    alert("Game Over. You lost.")
}


function winGame() {
    stopGame();
    alert("Congratulations! You have won the game!")
}


function guess(btn) {
    console.log("user guessed: " + btn);
    if(!gamePlaying) {
      return;
    }
  
    if(btn == pattern[guessCounter]) {
      //Guess was correct
      if(guessCounter == progress) {
        //Turn is over
        if(guessCounter == pattern.length - 1) {
          //Game is won
          winGame();
        }else {
          //One turn correct, onto the next
          progress++;
          playClueSequence();
        }
      }else {
        //Turn isn't over, so guess goes up
        guessCounter++;
      }
    }else {
      numOfMistakes++;
      displayMistakes();
      
      //Game is lost
      if(numOfMistakes == 3) {
        displayMistakes();
        loseGame(); 
      }
    }
}


function generatePattern() {
  for(let i = 0; i < gameLength; i++) {
    let random = Math.floor( Math.random() * Math.floor(6) ) + 1;
    pattern.push(random);
  }
}


function displayMistakes() {
  var displayString = "Chances left: " + (3-numOfMistakes);
  document.getElementById("Mistakes").innerHTML = displayString;
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 555.5
}


function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}


function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}


function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}


//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)