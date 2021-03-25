# Pre-work - *Memory Game*

**Match with Memory** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Ashwin Sampath**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/working-organic-epoch

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

I displayed the number of mistakes the user had as "chances left" so they would know to be more careful
after making one or two mistakes.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src="http://g.recordit.co/ukJk6kkWpF.gif" width=250><br>
<img src="http://g.recordit.co/eKmzb83CEu.gif" width=250><br>

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

  I have listed the links I used to help complete my submission below:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  https://www.w3schools.com/cssref/css_colors.asp
  https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
  https://www.w3docs.com/snippets/css/how-to-align-the-content-of-a-div-to-the-bottom.html
  https://www.w3schools.com/js/js_htmldom_html.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
  
  A challenge I encountered in creating my submission was the implementation of the mistake counter being displayed.  I wanted to create a counter so the user would actually know how many mistakes they had left before they would lose the game.  The actual code for the counter was fairly easy to write, but displaying it was more difficult than I expected. My first idea was to create a "<p>" tag in the HTML file with the text "Chances left: " and somehow inject Javascript code that would change the number.  Finding that "somehow" ended up eating a large portion of my time, and I still wasn't any closer to a solution.

  After some research on the DOM, I saw that it was possible to modify HTML with Javascript and I had an idea.  First, I created that "<p>" tag with an ID given as "Mistakes", but I did not insert any text into the body of the tag.  Next, I wrote a function in Javascript that formed a string with the given number of mistakes, but I flipped it so the user would see it as "chances". I believe that this choice made it much clearer for the user to understand.  Finally, I used the getElementByID function with the "Mistakes" ID as an argument and changed its inner HTML to the string I created earlier.  I called this function wherever the number of chances should decrement.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  One of the main questions I had during the development of this website was how does one know when to use Javascript tags?  I have had a little experience with HTML, and I always see a separate file for any
  Javascript code but looking at the page source of most websites, there is almost always a "<script>" tag.  

  I realized throughout implementing this website, I would almost be lost reading through the website links in the prework.  There is so much to delve into, whether it be HTML, CSS, or Javascript.  All
  this information made me think about how much knowledge front-end developers need to know to make these elegant websites that millions of people view daily.  I know that frameworks are used now to speed up
  the development process, but I wonder how much they have to know.

  The last question I have is how often do web developers have to keep rewriting their code?  I see that new standards come out often and browser versions become deprecated, which made me wonder whether or not the 
  code can remain the same for a relatively long period of time.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
    
  If I had a few more hours, I would implement the ticking clock as well as the sprucing up of the buttons.  After that, I would do more research and try refactoring the way I displayed the mistakes counter so I would
  only have to call the function once.  I would also try randomizing the colors of the game buttons, so the user would not be able to gain familiarity with repeated playthroughs.  A difficulty setting would not be too hard
  to implement, with an easy/medium/hard setting dictating how fast and how many patterns the game would have.



## License

    Copyright Ashwin Sampath

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
