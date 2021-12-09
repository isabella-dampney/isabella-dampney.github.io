  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
var cells = document.getElementsByTagName("TD")     // sources array of cells from the HTML table in HTML doc.

var randomIndex = Math.floor(Math.random() * cells.length); // creates a random number

var randomCell = cells[randomIndex] // then we assign that number to a cell to select a random cell. 

var fart = document.createElement('img');   // creates HTML element, and tells it that it's a img. It is accessable through "mole". 
fart.src = 'fart.PNG';
fart.id = "fart";                       //links to the CSS to style img to fit cell
randomCell.appendChild(fart);           // the appendChild adds the variable mole which is the image to the variable randomCell. This way they operate together. 
//parentNode.appendChild(childNode);    The appendChild() returns the appended child.

mole.onclick = whackedMole              // When you click on the mole 

function whackedMole () {
  randomIndex = Math.floor(Math.random() * cells.length);
  randomCell = cells[randomIndex];
  randomCell.appendChild(fart); 

  var audio = new Audio();
  audio.src = "fart.wav";
  audio.play();
}

//console.log(randomCell)