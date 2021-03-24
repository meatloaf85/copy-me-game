Name: Jarrett Gates

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  I referenced the official JS documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
  The biggest challenge I encountered during this project was completing the guess function. I had to refer to the JavaScript documentation to find out how to grab the length of the array. 
  Moreover, I implemented the logic of the guess function wrong, instead of indexing the 'pattern' array with guessCounter. I mistakengly used the 'progress' variable. I realized this mistake after I finished writing out the function, and had 
  issues playing the game.
  While completing the random guess optional feature, I referred to the JS docs once again to understand how Math.random() is used properly. After a bit of researching, I discovered when combined with Math.floor(), you could do this -> Math.floor(Math.random()) * n+1, where n is the number of buttons I have set. If the random number was 0, I threw out that number and looped again to make sure I received the numbers only in the range of buttons I have set. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   What are the differences between JavaScript and front-end frameworks written in JS? Is each framework used depending on the type of functionality you are trying to achieve or is it a matter of personal preference?
   What does the behind the scenes of glitch.com look like when creating a new project for each user? 
   How does the back-end connect to the front-end?
  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
  If the user wanted more of a challenge, I would add a difficulty setting that a user can choose from: 'easy', 'normal' or 'hard' mode. With each difficulty adjusting the timer for the tones/lights to be shorter or longer and adding/removing the amount of buttons to press. 
  I also implemented a visual 'try' counter, the game ends after the user makes three mistakes. I would have liked to further expand on this by adding an audio cue when pressing the wrong button on top of the visual counter changing.
  
  
 <img src="http://g.recordit.co/Fa9ireaxfd.gif" width=1080><br>
 
 ## Testing all difficulty modes and lose scenarios.
  <img src="http://g.recordit.co/skDT4unLgN.gif" width=1080><br>
  
 ## Test win on easy mode.
  <img src="http://g.recordit.co/EUsbmkrTOS.gif" width=1080><br>

