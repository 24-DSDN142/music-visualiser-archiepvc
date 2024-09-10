
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
console.log("counter: " + counter);

let firstRun = true

let Snail = [];{
  if (firstRun) {
    rectMode(CENTER);
    Snail.push(loadImage('happySnail_0.png'));
    Snail.push(loadImage('happySnail_1.png'));
    Snail.push(loadImage('happySnail_2.png'));
    firstRun = false
  }

  background(0);

  let VocalFrame = int(map(vocal, 0,100, 0,3));

  console.log(VocalFrame);
  push();
  scale(0.5);
  image(Snail[VocalFrame], width/2, height/2)
  pop();


}

let TV = map(drum, 0, 200, 500, 600);
let Speaker = map(vocal, 0, 150, 500, 600);

// This Draws the TV Set.
fill(117, 76, 41)
rect(0, 970, 4000, 250);

fill(82, 50, 23);
rect(900, 750, 75, 250);
rect(250, 750, 75, 250);

fill(117, 76, 41);
rect(580, 440, TV + 420, TV + 90);

fill(173, 143, 106);
rect(530,440, TV + 260, TV + 40);

fill(56, 38, 16);
rect(985 + TV/5 - 100,440 + TV/5 - 100, Speaker - 470, Speaker); //- TV + 500) - TV + 40

if(counter>= 1285 && counter <= 7000){
   scale(0.87);
   stroke(1);
   strokeWeight(2);
   fill(0);
   rect(605,500, TV + 200, TV);   
}
else
{if(counter<= 1285)
   scale(0.87);
   stroke(1);
   strokeWeight(2);
   fill(56, 88, 112);
   rect(605,500, TV + 200, TV);
}

if(counter>= 0 && counter <= 300){
   textAlign(CENTER)
}

//this displays the "words"
if(counter>= 0 && counter <= 370){
fill(167, 195, 217);
textSize(100);
textFont('Courier');
text("BEIRD", 562 + TV/10, 465 + TV/10);
}

if(counter>= 692 && counter <= 771){
   fill(167, 195, 217);
   textSize(100);
   textFont('Courier');
   text("BY", 562 + TV/10, 465 + TV/10);
}
if(counter>= 848 && counter <= 1002){
   fill(167, 195, 217);
   textSize(70);
   textFont('Courier');
   text("JACK STAUBER", 562 + TV/10, 465 + TV/10);
}


}




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
 
