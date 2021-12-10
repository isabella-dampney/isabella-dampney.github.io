  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

document.onkeydown = checkKey;  // whenever any of the arrow keys are pressed call the function checkKey

function checkKey(e) {  // takes in the event argument that holds the info for the event


  if (e.keyCode == '38') { // each key has a code. 38 = up arrow
      changeVertical(-1)
  }
  else if (e.keyCode == '40') { // 40 = down arrow
      changeVertical(1)         // index passed in as the argument from changeVerticle to say where to move in index when arrow key is pushed.  
  }
  else if (e.keyCode == '37') { // 37 = left arrow
      changeHorizontal(-1)

  }
  else if (e.keyCode == '39') { // 39 = right arrow 
      changeHorizontal(1)    
  }

}

var indexes = [0, 0, 0]                         // indexes for head, body, and shoes
            // 0  1  2
var mainIndex = 0                               // where you are in the index 0 = head, 1 = body, 2 = shoes. What part of the body. 

var head = document.getElementById("head")      // grabs image by id from html file
var body = document.getElementById("body")
var shoes = document.getElementById("shoes")

var imgs = [head, body, shoes]                  // variable that pulls in images from HTML and makes it into array, so array can be accessed through new variable image. It is accessed via "mainIndex" which means that depending on where in the main index you are, will depend on what image is displayed.  
var strings = ["head", "body", "shoes"]         // these strings are inserted into the image.src to concatenate the image src file name to dynamically change it.  

function changeHorizontal(shift) {              // parameter shift is index of where you are with the arrow keys. 
    
  var index = indexes[mainIndex]                // indexes is the index of head body and shoes, 0, 1, 2. So head = 0 and we're passing that through the mainIndex which is where we are currently located in the index. indexes[mainIndex] is just a copy of indexes so it can only go once to left or right, like only used once. 
  var image = imgs[mainIndex]         // what image we are at in the index. Using mainIndex to pluck out head body or shoes image based on where we are at in the index. 
  var str = strings[mainIndex]    

  index += shift                      // adding index from checkKey changeHorizontal or changeVerticle onto index here. So -1 + 1 or 1+1 etc. 

      if (index < 0)
          index = 5
  
      if(index > 5)
        index = 0

      indexes[mainIndex] = index      // creating a copy of the index, making sure it doesn't move too far left or right, and then reassigning the head body or shoes  to be new copy of index we've made. Make a copy, do work to it, and reassign it and then reuse it in next line of code.  Because whenever the function above runs we are creating a new copy of the index, so if you click next twice it's going to go back to start because it has actually retriggered the code. 
    
      image.src = "./images/" + str + index + ".png"   // str = head, body etc and index = how far along we are horizontally
  }


function changeVertical (shift) {        // changeVertical function is in charge of which part of the body we are editing. Head, body, shoes
    mainIndex += shift                   // mainIndex (head, body, shoes) + whatever the shift is which would be -1 or 1 on the arrow keys.  

    if(mainIndex < 0)                    // between 0-2 so you can go up and down between the 3 parts of the body 
       mainIndex = 2

    if(mainIndex > 2)                     // once reached 2 go back to 1st place in index. 
       mainIndex = 0
}
