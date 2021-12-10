   // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
document.getElementById("uni0").onclick = clicked // creates a variant from the unicorn image in the HTML document which we are accessing through it's id.  
document.getElementById("uni1").onclick = clicked // Appended is the onclick event that points towards the function "clicked"
document.getElementById("uni2").onclick = clicked

var inflation = [0, 0, 0] //inflation level of the unicorn. The array represents the inflation levels. It starts at 0 and then increases when this: "inflation[id]++" is triggered. If it was set at 2, the inflation level would be 2 and it would be one click from fully inflated. 

function clicked(event) { // "event" can be anything, but the convention is to call it "event" or "e". When you use onclick JS slips in a secret variable which you can use to find information about the click. This is called "event".  
    var unicorn = event.target // we want "target" because that is what the mouse is targeting. You can see this is the clicked "event" on the console. Target here is the picture of the unicorn
    var id = unicorn.id[3] // you can pull out index characters of a string(id) which at index[3], is the number which correlates to which image we are clicking on. 
 
    inflation[id]++ // each time you click on the image the "id" is going to change to whichever image was just clicked and then the inflation level is going to increase. 

    if (inflation[id] == 4) // if you've increased the number beyond the number of images - which here would be 4, return the count back to 0, which would start the process over again.
        inflation[id] =0
    
      unicorn.src = "./images/unicorn-" + inflation[id] + ".png" // concatenating strings to dynamically generate a new image name depending on how many times we have clicked on the image. The inflation[id] represents a number in the inflation array depending on how many times it has been clicked. So it will represent 0,1,2 etc. 
    }
  