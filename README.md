Name: Jarrett Gates

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

  I referenced the official JS documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript, https://www.w3schools.com/ for color and other CSS properties, and https://stackoverflow.com/ for trying out JS methods to edit CSS attributes.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  The biggest challenge I encountered during this project was completing the random guess optional feature.
  I referred to the JS docs once again to understand how Math.random() is used properly. After a bit of researching, I discovered when combined with Math.floor(), you could do this -> Math.floor(Math.random()) * n+1, where n is the number of buttons I have set. If the random number was 0, I threw out that number and looped again to make sure I received the numbers only in the range of buttons I have set. 
  
  Another new challenge arose while I was implementing an optional feature. The optional feature I wanted to implement was to allow the user to choose between different difficulty modes, depending on how much of a challenge the user is seeking. At first, I wasn't sure how to approach it. I tried several different implementations that did not work as I expected. I decided to create three different views to hold the different button sets. Easy mode has 3 buttons, normal has 4 and hard has 6. I wanted all of the buttons to be hidden from view, then when the user selects the mode they want, unhide that view. I then encountered another bump when my CSS properties were no longer applying to my buttons. After a bit of trial & error, I made unique buttons for each mode. My difficulty mode feature was now complete.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
4. 
   What are the differences between JavaScript and front-end frameworks written in JS? Is each framework used depending on the type of functionality you are trying to achieve or is it a matter of personal preference?
   What does the behind the scenes of glitch.com look like when creating a new project for each user? 
   How does the back-end connect to the front-end?
   The popular frameworks seem to change every few years, how does this effect present and future systems?
  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
5. 
  ** (See EDIT:) If the user wanted more of a challenge, I would add a difficulty setting that a user can choose from: 'easy', 'normal' or 'hard' mode. With each difficulty adjusting the timer for the tones/lights to be shorter or longer and adding/removing the amount of buttons to press. ** EDIT: I had extra time over my spring break and implemented this function, I am quite happy with it!
  I also implemented a visual 'try' counter, the game ends after the user makes three mistakes. I would have liked to further expand on this by adding an audio cue when pressing the wrong button on top of the visual counter changing.
  
 ## Testing easy and normal difficulty modes with lose scenarios.
  <img src="http://g.recordit.co/skDT4unLgN.gif" width=1080><br>
  
 ## Testing hard and normal difficulty modes with lose scenarios..
 <img src="http://g.recordit.co/DlNX19Mqmt.gif" width=1080><br>
  
 ## Test win on easy mode.
  <img src="http://g.recordit.co/EUsbmkrTOS.gif" width=1080><br>

