//global constants

const cluePauseTime = 333 // how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global variables
var pattern = [0,0,0,0,0,0,0,0,0,0];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  // must be between 0.0 and 1.0
var guessCounter = 0;
var number = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes = 0;
var tries = 3;

function startGame(){
  //intialize game variables
  mistakes = 0;
  tries = 3;
  progress = 0;
  gamePlaying = true;
  for(let j=0;j<pattern.length;j++){
    number = Math.floor(Math.random() * 7)
    while(number == 0){
      number = Math.floor(Math.random() * 7)
    }
    pattern[j] = number
    //console.log(pattern[j])
  }
  // swap the start and stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("myTries").innerHTML = "You have " + tries + " tries remaining.";
  playClueSequence();
}

function stopGame(){
  //intialize game variables
  gamePlaying = false;
  // swap the start and stop buttons
document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button" + btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button" + btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to intial wait time
  for(let i=0;i<=progress;i++){ //each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a time to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= 10;
  }
}

function loseGame(){
  stopGame();
  alert("Game over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn == pattern[guessCounter]){
    // guess was correct
    if(guessCounter == progress){
      if(progress == pattern.length-1){
        //game over, win
        winGame();
      }else{
        //pattern correct, next segment
        progress++;
        playClueSequence();
      }
    }else{
      //check next guess
      guessCounter++;
    }
  }else{
    mistakes += 1;
    //guess incorrect
    //gameover
    if(mistakes < 3){
      tries -= 1;
      document.getElementById("myTries").innerHTML = "You have " + tries + " tries remaining.";
      //alert("You have " + tries + " tries remaining");
    }
    if(mistakes == 3){
      document.getElementById("myTries").innerHTML = "You have " + 0 + " tries remaining. Game over!";
      loseGame();
    }
    
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 550,
  6: 650
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
