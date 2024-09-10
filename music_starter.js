
let TVGrow = 1 // the zooming in of the TV
let firstRun = true
let Jack = []; // the array for the singing
let JackBody = []; //
let JacksBody;
function preload(){
   JacksBody = loadImage('jack.png')
}

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   background(0)
  textFont('Verdana');
  rectMode(CENTER)
  textSize(24);

// the code to zoom in on the TV
if (counter>= 1010 && counter <= 7000){ 
TVGrow = TVGrow + 4.5;
}
else
TVGrow = 0

console.log("counter: " + counter);
let TV = map(drum, 0, 200, 500, 600);
let Speaker = map(vocal, 0, 150, 500, 600);


// this draws the TV Set.
fill(117, 76, 41)
rect(0, 970, 4000 + TVGrow/2, 250 + TVGrow/2);

fill(82, 50, 23);
rect(900, 750, 75 + TVGrow/2, 250 + TVGrow/2);
rect(250, 750, 75 + TVGrow/2, 250 + TVGrow/2);

fill(117, 76, 41);
rect(580, 440, TV + 420 + TVGrow, TV + 90 + TVGrow);

fill(173, 143, 106);
rect(530,440, TV + 260 + TVGrow/1.5, TV + 40 + TVGrow/1.5);

fill(56, 38, 16);
rect(985 + TV/5 - 100 + TVGrow/2,440 + TV/5 - 100, Speaker - 470, Speaker); //- TV + 500) - TV + 40


// this changes the TV colour
if(counter>= 1295 && counter <= 7000){
   scale(0.87);
   stroke(1);
   strokeWeight(2);
   fill(50, 82, 106);
   rect(605,500, TV + 200 + TVGrow/1.5, TV + TVGrow/1.5);   
}
else
{if(counter<= 1295)
   scale(0.87);
   stroke(1);
   strokeWeight(2);
   fill(56, 88, 112);
   rect(605,500, TV + 200 + TVGrow/1.5, TV + TVGrow/1.5);
}

if(counter>= 0 && counter <= 300){
   textAlign(CENTER)
}

//this displays the lyrics
if(counter>= 0 && counter <= 370){
fill(167, 195, 217);
textSize(100);
textFont('Arial Black');
text("BEIRD", 562 + TV/10, 465 + TV/10);
}

if(counter>= 692 && counter <= 771){
   fill(167, 195, 217);
   textSize(100);
   textFont('Arial Black');
   text("BY", 562 + TV/10, 465 + TV/10);
}
if(counter>= 848 && counter <= 1002){
   fill(167, 195, 217);
   textSize(70);
   textFont('Arial Black');
   text("JACK STAUBER", 562 + TV/10, 465 + TV/10);
}

//this plays the singing animation
if(counter>= 1289 && counter <= 7000){ //1289
if (firstRun){
   rectMode(CENTER);
   Jack.push(loadImage('jackk0.png'));
   Jack.push(loadImage('jackk1.png'));
   Jack.push(loadImage('jackk2.png'));
   Jack.push(loadImage('jackk3.png'));
   
   firstRun = false
 }

 let VocalFrame = int(map(vocal, 0,140, 0,4));
 let DrumFrame = int(map(drum,0,50, 300,500));

 console.log(VocalFrame);
 push();
 scale(0.2);
 image(Jack[VocalFrame], width/0.8, [DrumFrame])
 pop();

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
 
