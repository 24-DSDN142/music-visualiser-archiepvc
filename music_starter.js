
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   console.log("counter: " + counter);


   if(counter>= 100 && counter <= 300){
   fill(100)
   textAlign(CENTER)
   textSize(100)
   text("BEIRD", 600, 300); // TITLE !
}
let TV = map(drum, 0, 190, 500, 600)
let Speaker = map(vocal, 0, 100, 500, 600)

fill(117, 76, 41)
rect(580, 440, TV + 420, TV + 90)

fill(209, 178, 140)
rect(530,440, TV + 260, TV + 40)

scale(0.87)
stroke(1)
strokeWeight(2)
fill(80, 119, 148)
rect(605,500, TV + 200, TV)

//stroke(0)
//strokeWeight(0)
//fill(166, 116, 73)
//rect(690, 875, Speaker+350, Speaker-620)



//let y = 100 ;

//var drumMap = map(drum, 0,50,20,120);
//var LengthOfLine = 100;
//var Linestart = 100;
//var LineEnd = Linestart*LengthOfLine;


//for(var i = 1; i <=5; i ++){
// var loopY = i*70;
//strokeWeight(10)
// line (Linestart, drumMap*i, LineEnd, drumMap*i);
//}



//fill(500)
//ellipse(200, 200, eyeSize, eyeSize)
//ellipse(400, 200, eyeSize, eyeSize)


//fill(50, 100, 100)
//ellipse(200, 200, eyeSize/2, eyeSize/2)
//ellipse(400, 200, eyeSize/2, eyeSize/2)

//let mouthSize = map(vocal, 0, 100, 2, 50)
//fill(500)
//rect(300, 400, 300, mouthSize)

textFont('Verdana'); // please use CSS safe fonts
rectMode(CENTER)
textSize(24);
}

//vocal bar is red
//fill(200, 0, 0);
//rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//fill(0);
//text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
 //fill(0, 200, 0);
// rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//fill(0);
//text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
//fill(50, 50, 240);
//rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//fill(0);
//text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
//fill(200, 200, 200);
//rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//fill(0);
//text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//fill(255, 255, 0);
 
   // display "words"
//textAlign(CENTER);
//textSize(vocal);
//text(words, width/2, height/3);
//}