
let TVGrow = 1 // the zooming in of the TV
let firstRun = true
let Jack = []; // the array for the singing
let JackBody = []; // jack stauber's body
let JacksBody;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   if (firstRun){
      rectMode(CENTER); // this loads the images
      Jack.push(loadImage('jackk0.png'));
      Jack.push(loadImage('jackk1.png'));
      Jack.push(loadImage('jackk2.png'));
      Jack.push(loadImage('jackk3.png'));
      JacksBody = loadImage('jack.png');
      
      firstRun = false
    }
   background(0)
   textFont('Verdana');
   rectMode(CENTER)
   textSize(24);


// Variables
 let Light = color(72, 105, 130)
 let Blue = color(46, 74, 94)
 let Darker = color(56, 86, 110)
 let Sad = color(16, 36, 51)
 let StripeColor1 = color(56, 88, 112)
 let DarkStripeColor1 = color(40, 68, 89)
 let StripeColor = color(37, 67, 89)
 let SadStripe = color(9, 23, 33)
 let HappyBlue = color(75, 104, 125)
 let HappyStripe = color(55, 88, 112)


// this zooms in on the TV
if (counter>=115 && counter <= 138){
   PopUp = PopUp + 120;
} else if (counter>=139 && counter <= 174){
   Popup = PopUp + 3
} else 
   PopUp = 0

if (counter >=2540 && counter <=5000){
   Light = Darker
   StripeColor1 = DarkStripeColor1

} else if (counter >=6235 && counter <=7460){
   Blue = Sad
   StripeColor = SadStripe

} else if (counter >=8086 && counter <=8540){
   Blue = HappyBlue
   StripeColor = HappyStripe
}


// Zoom in on TV
if (counter>= 1010 && counter <= 2540){ 
   TVGrow = TVGrow + 4.5;
} else if (counter>=3475 && counter <= 6235){
   TVGrow = TVGrow + 4.5;
} else if (counter>=7460 && counter <= 9944){
   TVGrow = TVGrow + 100;
} else
TVGrow = 0


//more setup
console.log("counter: " + counter);
let TV = map(drum, 0, 200, 500, 600);
let Speaker = map(vocal, 0, 150, 500, 600);
let BassSpeaker = map(bass, 0, 150, 500, 600);
let Stripe = map(other, 40, 100, 40, 80);


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
rect(985 + TV/5 - 100 + TVGrow/2,440 + TV/5 - 100, BassSpeaker - 470, BassSpeaker); //- TV + 500) - TV + 40


// this changes the TV colour
if(counter>=6235){; //if(counter>= 1295 && counter <= 2510){
  scale(0.87);
  stroke(1);
  strokeWeight(2);
  fill(StripeColor);
rect(605,500, TV + 200 + TVGrow/1.5, TV + TVGrow/1.5);   

let stripeWidth = map(other, 50, 100, 10, 50, true);
let startY =  256 - TVGrow/1.5; 
let endY = height - 204 + TVGrow/1.5;
let numStripes = (endY - startY) / stripeWidth;

for (let i = 0; i < numStripes; i+=1.5) {
let stripes = map(i, 0, numStripes - 1, startY, endY - stripeWidth);
noStroke()
fill(Blue);
rect(605, stripes, TV + 200 + TVGrow/1.5, stripeWidth);
}

}else if(counter<= 6234){

scale(0.87); //0.87
stroke(1);
strokeWeight(2);
fill(StripeColor1);
rect(605, 500, TV + 200 + TVGrow/1.5, TV + TVGrow/1.5);
    
   let stripeWidth = map(other, 50, 100, 10, 50, true);
   let startY =  256 - TVGrow/1.5; 
   let endY = height - 204 + TVGrow/1.5;

   let numStripes = (endY - startY) / stripeWidth;

   for (let i = 0; i < numStripes; i+=1.5) {
   let stripes = map(i, 0, numStripes - 1, startY, endY - stripeWidth);
   noStroke()
   fill(Light);
   rect(605, stripes, TV + 200 + TVGrow/1.5, stripeWidth);
    
}
   
}


stroke(1) // adds stroke back


if(counter>= 0 && counter <= 300){
   textAlign(CENTER)
}
if(counter>= 0 && counter <= 368){
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
if(counter>=10858 && counter <= 11015){
   fill(167, 195, 217);
   textSize(70);
   textFont('Arial Black');
   text("THE END", 562 + TV/10, 465 + TV/10);
}


//this plays the singing animation
if(counter>=115 && counter <= 174){
   let VocalFrame = int(map(vocal, 0,120, 0,4));
   let DrumFrame = int(map(drum,0,75, 300,500));
   
   push();
   scale(0.3);
   rectMode(CENTER)
   image(JacksBody, 500, 3500 - [DrumFrame/2] - PopUp); //800
   pop();
   
   console.log(VocalFrame);
   push();
   scale(0.3);
   rectMode(CENTER)
   image(Jack[VocalFrame], width/3, [DrumFrame + 2100] - PopUp)
   pop(); 
} else if(counter>= 1304 && counter <= 2540){ //Singing 1

 let VocalFrame = int(map(vocal, 20,100, 0,4));
 let DrumFrame = int(map(drum,0,50, 300,500));
 
 push();
 scale(0.2);
 image(JacksBody, 1500, 1075 - [DrumFrame/2] + 400); //800
 pop();

 console.log(VocalFrame);
 push();
 scale(0.2);
 image(Jack[VocalFrame], width/0.8, [DrumFrame + 200])
 pop();

} else if(counter>=3750 && counter <= 6235){ // Singing 2
   let VocalFrame = int(map(vocal, 15,120, 0,4));
   let DrumFrame = int(map(drum,0,50, 300,500));
  
   push();
   scale(0.2);
   image(JacksBody, 1500, 1075 - [DrumFrame/2] + 400); //800
   pop();
  
   console.log(VocalFrame);
   push();
   scale(0.2);
   image(Jack[VocalFrame], width/0.8, [DrumFrame + 200])
   pop();
} else if (counter>=7460 && counter <= 8540){ // Singing 3
   let VocalFrame = int(map(vocal, 15,120, 0,4));
   let DrumFrame = int(map(drum,0,50, 300,500));
  
   push();
   scale(0.2);
   image(JacksBody, 1500, 1075 - [DrumFrame/2] + 400); //800
   pop();
  
   console.log(VocalFrame);
   push();
   scale(0.2);
   image(Jack[VocalFrame], width/0.8, [DrumFrame + 200])
   pop(); 
} else if (counter>= 8541 && counter <= 8660){ // 8541 and 8600
let VocalFrame = int(map(vocal, 15,120, 0,4));
let DrumFrame = int(map(drum,0,50, 300,500));

fill(50, 82, 106);
rect (700,550,5000,2000)

push();
scale(0.3);
rectMode(CENTER)
image(JacksBody, 500, 600 - [DrumFrame/2]); //800
pop();

console.log(VocalFrame);
push();
scale(0.3);
rectMode(CENTER)
image(Jack[VocalFrame], width/3, [DrumFrame - 600])
pop(); 
} else if (counter>= 8601 && counter <= 9944){
   let VocalFrame = int(map(vocal, 15,120, 0,4));
   let DrumFrame = int(map(drum,0,50, 300,500));
  
   push();
   scale(0.2);
   image(JacksBody, 1500, 1075 - [DrumFrame/2] + 400); //800
   pop();
  
   console.log(VocalFrame);
   push();
   scale(0.2);
   image(Jack[VocalFrame], width/0.8, [DrumFrame+ 200])
   pop(); 
}

// MOVIE ENDS AT 11376

}
