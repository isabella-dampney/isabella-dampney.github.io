  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
var cells = document.getElementsByTagName("TD")     // sources array of cells from the HTML table in HTML doc.

var randomIndex = Math.floor(Math.random() * cells.length); // creates a random number

var randomCell = cells[randomIndex] // then we assign that number to a cell to select a random cell. 

var mole = document.createElement('IMG');   // creates HTML element, and tells it that it's a img. It is accessable through "mole". 
mole.src = './mole.PNG';
mole.id = "mole";                       //links to the CSS to style img to fit cell
randomCell.appendChild(mole);           // the appendChild adds the variable mole which is the image to the variable randomCell. This way they operate together. 
//parentNode.appendChild(childNode);    The appendChild() returns the appended child.

mole.onclick = whackedMole              // When you click on the mole it triggers the function whackedMole

function whackedMole () {               // whackedMole takes the same code which makes the mole bounce around, the function triggers that action when the mole is clicked on. So it uses the same functionality that makes the mole move each time you refresh the page, but it reuses it to make the move move when clicked on rather than page refresh. 
  randomIndex = Math.floor(Math.random() * cells.length);
  randomCell = cells[randomIndex];
  randomCell.appendChild(mole); 

  var audio = new Audio();             // creates a variable for the sound. As it is part of the function it triggers at the same time as the mole is clicked on. 
  audio.src = "whack-audio.wav";
  audio.play();
}

//console.log(randomCell)