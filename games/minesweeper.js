document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click', checkForWin)         // each time we click on a cell see if the check for win is true (execute checkForWin function)
document.addEventListener('contextmenu', checkForWin)   // each time we right click on a cell check to see if win is true. 

// Please bare in mind that this is a rudimentary version of the game, without any of the stretches etc. And this is my understanding of how it works. But as I said, I found this one really hard, so this is what I went through with my facilitator and managed to gauge from the conversation. 

// Here we have 9 cells, and at random I've pick two to be mines. 
var board= {
cells: [{row: 0, col: 0, isMine: false, hidden: true}, {row: 0, col: 1, isMine: false, hidden: true}, {row: 0, col: 2, isMine: false, hidden: true}, 
        {row: 1, col: 0, isMine: false, hidden: true}, {row: 1, col: 1, isMine: true, hidden: true}, {row: 1, col: 2, isMine: true, hidden: true},
        {row: 2, col: 0, isMine: false, hidden: true}, {row: 2, col: 1, isMine: false, hidden: true}, {row: 2, col: 2, isMine: false, hidden: true}]
}


function startGame () {
  for (let i = 0; i < board.cells.length; i++) { // loop to go through each cell
    let cell = board.cells[i] // here we are creating a variable "cell" which stands-in for one cell within the cells object. We are setting it to be one of the cells at the iterator depending on which cell we are currently at in the loop. 
    cell.surroundingMines = countSurroundingMines(cell) // within the loop we are creating a new key in the cell object. This key is "surroundingMines" which will then call the function "countSurroundingMines" who's parameter is whichever cell we are currently at in the loop. 
  }                                                     // within JS the cell now looks like this {row: 0, col: 0, isMine: false, hidden: true, surroundingMines:[i]} we just don't see it, but if you were to console.log you would now see it as a key of the object.
                                                        // I find line 17 is really tricky to get your head around, because you are adding into the cell the key which will hold the tally of the number of surrounding mines within proximity to a cell, and then the function countSurroundingMines is going to do the work of counting and putting that number into the object key "surroundingMines". 
                                                        // I think it's tricky because it sort of swings back in on itself, and then we jump to the function at the bottom of the document. 
 
 
    lib.initBoard()        
              
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  let youWon = true                                // This is structured innocent until proven guilty. The youWon is true until it is proven false by the following code. 

  for (let i = 0; i < board.cells.length; i++) {   // loop that is going to check the following if statements to see if youWon is true or false. 
    
    let cell = board.cells[i]                      // defining cell for the if statements. You could make it for example: (board.cell[i].isMine ...) but that is confusing for readability. So we define it to the shorthand "cell". 

    console.log(cell)

    if (cell.isMine && !cell.isMarked) {           // If the cell IS a mine and if it is NOT marked, you didn't win. The "isMarked" key is another thing happening in the background. It is a key in each cell and is visible to JS in the background much like "surroundingMines". It is visible in the console.
      youWon = false
    }

    if (!cell.isMine && cell.hidden) {            //if the cell is NOT a mine, and it IS hidden (not clicked on), you didn't win. 
      youWon = false
    }
  }

  if (youWon) {                                   // if neither of the above conditions are met, i.e that youWon remains true - you win, and the message displays. 
    lib.displayMessage('You win!')
  }

  
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//var surrounding = lib.getSurroundingCells(cell.row, cell.col) 
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {

  let surrounding = lib.getSurroundingCells(cell.row, cell.col); // This is one of the annoying parts of this exercise because all of the work is basically being done by this "lib.getSurroundingCells" and I have no idea how it really works. But anyway, basically (I think) it does the job of counting each cell around a mine and holding that count. 

  let count = 0
  
  for (i = 0; i < surrounding.length; i++){                      // loops through the surrounding cells as many times as there are cells
    if (surrounding[i].isMine == true) {                         // if the surrounding cell is a mine, [i] being the cell we are currently looking at in the loop, if this is true then add it to the count.
      count++;
    }
}
return count;                                                    // return the counts, which makes the number mines surrounding each cell appear on the gameboard (this appearance is also stuff happening in the background)
}


