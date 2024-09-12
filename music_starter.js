
let TVGrow = 1 // the zooming in of the TV
let firstRun = true
let Jack = []; // the array for the singing
let JackBody = []; // jack stauber's body
let JacksBody;
let x, y;
let speedX, speedY;
let DVD = []; // moving DVD logo
let Static = []; // overlaid TV screen with static
let antennaTV = []; // TV antenna
let Blur = []; // blurry background
x = 0;
y = 0;
x1 = 0;
y1 = 0;
x2 = 0;
y2 = 0;
negativex = -0.0001;
negativey = -0.0001;
negativex1 = -0.0001;
negativey1 = -0.0001;
speedX = 3;
speedY = 2;
speedX1 = 3.45;
speedY1 = 2.45


// Vocal, drum, bass, and other; volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   if (firstRun){
      rectMode(CENTER); // this loads the images
      Jack.push(loadImage('jackk0.png'));
      Jack.push(loadImage('jackk1.png'));
      Jack.push(loadImage('jackk2.png'));
      Jack.push(loadImage('jackk3.png'));
      JacksBody = loadImage('jack.png');
      DVD = loadImage('DVD.png');
      Static = loadImage('Static.jpg');
      antennaTV = loadImage('antennaTV.png');
      Blur = loadImage('Capture.png');


      firstRun = false
    }
   background(3, 29, 38)
   textFont('Verdana');
   rectMode(CENTER)
   textSize(24);


// Variables
 let Light = color(72, 105, 130)
 let Blue = color(46, 74, 94)
 let Darker = color(56, 86, 110)
 let Sad = color(34, 64, 87)
 let StripeColor1 = color(56, 88, 112)
 let DarkStripeColor1 = color(40, 68, 89)
 let StripeColor = color(37, 67, 89)
 let SadStripe = color(25, 50, 69)
 let HappyBlue = color(75, 104, 125)
 let HappyStripe = color(55, 88, 112)


// This zooms in on the TV
if (counter>=115 && counter <= 138){
   PopUp = PopUp + 120;
} else if (counter>=139 && counter <= 174){
   PopUp = PopUp + 3
} else if(counter>=175 && counter <= 220){
   PopUp = PopUp - 200; 
} else {PopUp = 0
}

// Riff colour change
if (counter>=849 && counter <=872){ //22
   Light = Darker
   StripeColor1 = DarkStripeColor1
} else if (counter>=873 && counter <=892){ //19
   Light = Blue
   StripeColor1 = SadStripe
} else if (counter>=893 && counter <=909){ //16
   Light = Light
   StripeColor1 = StripeColor1
} else if (counter>=910 && counter <=925){ //15
   Light = Darker
   StripeColor1 = DarkStripeColor1
} else if (counter>=926 && counter <=948){ //22
   Light = Blue
   StripeColor1 = SadStripe
} else if (counter>=949 && counter <=968){ // 19
   Light = Light
   StripeColor1 = StripeColor1
} else if (counter>=969 && counter <=985){ //16
   Light = Darker
   StripeColor1 = DarkStripeColor1
}

// Riff colour change
if (counter>=1460 && counter <=1482){ //22
   Light = Darker
   StripeColor1 = DarkStripeColor1
} else if (counter>=1483 && counter <=1502){ //19
   Light = Blue
   StripeColor1 = SadStripe
} else if (counter>=1503 && counter <=1519){ //16
   Light = Light
   StripeColor1 = StripeColor1
} else if (counter>=1520 && counter <=1535){ //15
   Light = Darker
   StripeColor1 = DarkStripeColor1
} else if (counter>=1536 && counter <=1558){ //22
   Light = Blue
   StripeColor1 = SadStripe
} else if (counter>=1559 && counter <=1578){ // 19
   Light = Light
   StripeColor1 = StripeColor1
} else if (counter>=1579 && counter <=1595){ //16
   Light = Darker
   StripeColor1 = DarkStripeColor1
}

// Riff colour change
if (counter>=2079 && counter <=2101){ //22
   Light = Darker
   StripeColor1 = DarkStripeColor1
} else if (counter>=2102 && counter <=2121){ //19
   Light = Blue
   StripeColor1 = SadStripe
} else if (counter>=2122 && counter <=2138){ //16
   Light = Light
   StripeColor1 = StripeColor1
} else if (counter>=2139 && counter <=2154){ //15
   Light = Darker
   StripeColor1 = DarkStripeColor1
} else if (counter>=2155 && counter <=2177){ //22
   Light = Blue
   StripeColor1 = SadStripe
} else if (counter>=2178 && counter <=2197){ // 19
   Light = Light
   StripeColor1 = StripeColor1
} else if (counter>=2198 && counter <=2214){ //16
   Light = Darker
   StripeColor1 = DarkStripeColor1
}

 //Riff colour change
if (counter>=3926 && counter <=3948){ //22
   Light = Light
   StripeColor1 = StripeColor1
} else if (counter>=3949 && counter <=3968){ //19
   Light = Darker
   StripeColor1 = DarkStripeColor1
} else if (counter>=3969 && counter <=3985){ //16
   Light = Blue
   StripeColor1 = SadStripe
} else if (counter>=3986 && counter <=4001){ //15
   Light = Light
   StripeColor1 = StripeColor1
} else if (counter>=4002 && counter <=4024){ //22
   Light = Darker
   StripeColor1 = DarkStripeColor1
} else if (counter>=4025 && counter <=4044){ // 19
   Light = Blue
   StripeColor1 = SadStripe
} else if (counter>=4045 && counter <=4061){ //16
   Light = Light
   StripeColor1 = StripeColor1
}

// Riff
if (counter>=4543 && counter <=4565){ //22
   Light = Light
   StripeColor1 = StripeColor1
} else if (counter>=4566 && counter <=4585){ //19
   Light = Darker
   StripeColor1 = DarkStripeColor1
} else if (counter>=4586 && counter <=4602){ //16
   Light = Blue
   StripeColor1 = SadStripe
} else if (counter>=4603 && counter <=4618){ //15
   Light = Light
   StripeColor1 = StripeColor1
} else if (counter>=4619 && counter <=4641){ //22
   Light = Darker
   StripeColor1 = DarkStripeColor1
} else if (counter>=4642 && counter <=4661){ // 19
   Light = Blue
   StripeColor1 = SadStripe
} else if (counter>=4662 && counter <=4678){ //16
   Light = Light
   StripeColor1 = StripeColor1
} else if (counter>=4679 && counter <=5000){ // 
   Light = Darker
   StripeColor1 = DarkStripeColor1
}

// Riff
if(counter>=5160 && counter <=5179){ //19
Light = Darker
StripeColor1 = DarkStripeColor1
} else if (counter>=5180 && counter <=5202){ //22
Light = Blue
StripeColor1 = SadStripe
} else if (counter>=5203 && counter <=5219){ // 16
Light = Light
StripeColor1 = StripeColor1
} else if (counter>=5220 && counter <=5241){ //21
Light = Darker
StripeColor1 = DarkStripeColor1
} else if (counter>=5242 && counter <=5258){ //16
Light = Blue
StripeColor1 = SadStripe
} else if (counter>=5259 && counter <=5278){ //19
Light = Light
StripeColor1 = StripeColor1
} else if (counter>=5279 && counter <=5298){ //19
Light = Darker
StripeColor1 = DarkStripeColor1
} else if (counter>=5299 && counter <=5320){ //21
Light = Blue
StripeColor1 = SadStripe
}

//Riff - FIXED
if(counter>=5465 && counter <=5489){ //19
Light = Darker
StripeColor1 = DarkStripeColor1
} else if (counter>=5490 && counter <=5509){ //19
Light = Blue
StripeColor1 = SadStripe
} else if (counter>=5510 && counter <=5530){ //20
Light = Light
StripeColor1 = StripeColor1
} else if (counter>=5531 && counter <=5546){ //20
Light = Darker
StripeColor1 = DarkStripeColor1
} else if (counter>=5547 && counter <=5565){ //20
Light = Blue
StripeColor1 = SadStripe
} else if (counter>=5566 && counter <=5585){ //20
Light = Light
StripeColor1 = StripeColor1
} else if (counter>=5586 && counter <=5606){ //19
Light = Darker
StripeColor1 = DarkStripeColor1
} else if (counter>=5607 && counter <=5631){ // 20
Light = Blue
StripeColor1 = SadStripe
}

//Riff - FIXED
if(counter>=5778 && counter <=5797){ //19
Light = Darker
StripeColor1 = DarkStripeColor1
} else if (counter>=5798 && counter <=5817){ //19
Light = Blue
StripeColor1 = SadStripe
} else if (counter>=5818 && counter <=5835){ //19
Light = Light
StripeColor1 = StripeColor1
} else if (counter>=5836 && counter <=5856){ //19
Light = Darker
StripeColor1 = DarkStripeColor1
} else if (counter>=5857 && counter <=5873){ //19
Light = Blue
StripeColor1 = SadStripe
} else if (counter>=5874 && counter <=5893){ //19
Light = Light
StripeColor1 = StripeColor1
} else if (counter>=5894 && counter <=5913){ //19
Light = Darker
StripeColor1 = DarkStripeColor1
} else if (counter>=5914 && counter <=5934){ //20
Light = Blue
StripeColor1 = SadStripe
}

//Riff - FIXED
if(counter>=6089 && counter <=6108){ //19
Light = Darker
StripeColor1 = DarkStripeColor1
} else if (counter>=6109 && counter <=6128){ //22
Light = Blue
StripeColor1 = SadStripe
} else if (counter>=6129 && counter <=6145){ //16
Light = Light
StripeColor1 = StripeColor1
} else if (counter>=6146 && counter <=6165){ //19
Light = Darker
StripeColor1 = DarkStripeColor1
} else if (counter>=6166 && counter <=6182){ //16
Light = Blue
StripeColor1 = SadStripe
} else if (counter>=6183 && counter <=6202){ //19
Light = Light
StripeColor1 = StripeColor1
} else if (counter>=6203 && counter <=6235){ //19
Light = Darker
StripeColor1 = DarkStripeColor1
}

//Riff - FIXED
if(counter>=8245 && counter <=8263){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=8264 && counter <=8284){ //19
Blue = Blue
StripeColor = StripeColor
} else if (counter>=8285 && counter <=8301){ //19
Blue = Light
StripeColor = StripeColor1
} else if (counter>=8302 && counter <=8322){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=8323 && counter <=8340){ //19
Blue = Blue
StripeColor = StripeColor
} else if (counter>=8341 && counter <=8360){ //19
Blue = Light
StripeColor = StripeColor1
} else if (counter>=8361 && counter <=8378){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=8379 && counter <=8399){ //
Blue = Blue
StripeColor = StripeColor
}

//Riff - FIXED
if(counter>=8864 && counter <=8883){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=8884 && counter <=8904){ //19
Blue = Blue
StripeColor = StripeColor
} else if (counter>=8905 && counter <=8921){ //19
Blue = Light
StripeColor = StripeColor1
} else if (counter>=8922 && counter <=8936){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=8937 && counter <=8956){ //19
Blue = Blue
StripeColor = StripeColor
} else if (counter>=8957 && counter <=8976){ //19
Blue = Light
StripeColor = StripeColor1
} else if (counter>=8977 && counter <=8996){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=8997 && counter <=9016){ //
Blue = Blue
StripeColor = StripeColor
}

//Riff - FIXED
if(counter>=9167 && counter <=9186){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=9187 && counter <=9206){ //19
Blue = Blue
StripeColor = StripeColor
} else if (counter>=9207 && counter <=9224){ //19
Blue = Light
StripeColor = StripeColor1
} else if (counter>=9225 && counter <=9244){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=9245 && counter <=9261){ //19
Blue = Blue
StripeColor = StripeColor
} else if (counter>=9262 && counter <=9281){ //19
Blue = Light
StripeColor = StripeColor1
} else if (counter>=9282 && counter <=9301){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=9301 && counter <=9321){ //
Blue = Blue
StripeColor = StripeColor
}

//Riff - FIXED
if(counter>=9475 && counter <=9494){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=9495 && counter <=9514){ //19
Blue = Blue
StripeColor = StripeColor
} else if (counter>=9515 && counter <=9531){ //19
Blue = Light
StripeColor = StripeColor1
} else if (counter>=9532 && counter <=9551){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=9552 && counter <=9568){ //19
Blue = Blue
StripeColor = StripeColor
} else if (counter>=9569 && counter <=9588){ //19
Blue = Light
StripeColor = StripeColor1
} else if (counter>=9589 && counter <=9608){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=9609 && counter <=9629){ //
Blue = Blue
StripeColor = StripeColor
}

//Riff - FIXED
if(counter>=9781 && counter <=9800){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=9801 && counter <=9820){ //19
Blue = Blue
StripeColor = StripeColor
} else if (counter>=9821 && counter <=9837){ //19
Blue = Light
StripeColor = StripeColor1
} else if (counter>=9838 && counter <=9857){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=9858 && counter <=9874){ //19
Blue = Blue
StripeColor = StripeColor
} else if (counter>=9875 && counter <=9894){ //19
Blue = Light
StripeColor = StripeColor1
} else if (counter>=9895 && counter <=9914){ //19
Blue = Darker
StripeColor = DarkStripeColor1
} else if (counter>=9915 && counter <=9940){ //
Blue = Blue
StripeColor = StripeColor
}


// More permanent colour changes
if (counter >=2540 && counter <=3925){
   Light = Darker
   StripeColor1 = DarkStripeColor1

} else if (counter>=4062 && counter <=4542){
   Light = Darker
   StripeColor1 = DarkStripeColor1

} else if (counter >=6235 && counter <=7460){
   Blue = Sad
   StripeColor = SadStripe

} else if (counter >=8086 && counter <=8169){
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


// More setup
console.log("counter: " + counter);
let TV = map(drum, 0, 200, 500, 600);
let Speaker = map(vocal, 0, 150, 500, 600);
let BassSpeaker = map(bass, 0, 150, 500, 600);


// This draws the background
stroke(1);
strokeWeight(2);
fill(0, 10, 15);
rect(0, 0, 5000, 5000);   

let stripeWidth = map(other, 50, 100, 10, 50, true);
let startY =  0; 
let endY = height;
let numStripes = (endY - startY) / stripeWidth;

for (let i = 0; i < numStripes; i+=1.5) {
let stripes = map(i, 0, numStripes - 1, startY, endY - stripeWidth);
noStroke()
fill(2, 24, 36);
rect(0, stripes - 50, 5000, stripeWidth);
}


// This draws the TV Set.
stroke(84, 55, 30)
strokeWeight(3)

fill(117, 76, 41)
rect(0, 970, 4000 + TVGrow/2, 250 + TVGrow/2);

push();
scale();
image(antennaTV, 375, 280 - TV/2, 350 ,150);
pop();

stroke(59, 33, 12)
fill(59, 33, 12)
triangle(290, 875, 400 - TVGrow*2, 845 - TVGrow*2, 290 - TVGrow, 845 - TVGrow);
triangle(940, 875, 1050 - TVGrow*2, 845 - TVGrow*2 , 940 - TVGrow, 845 - TVGrow)

fill(82, 50, 23);
rect(900, 750, 75 + TVGrow/2, 250 + TVGrow/2);
rect(250, 750, 75 + TVGrow/2, 250 + TVGrow/2);

stroke(59, 33, 12)
fill(59, 33, 12);
rect(900, 650, 75 + TVGrow/2, 250 + TVGrow/2);
rect(250, 650, 75 + TVGrow/2, 250 + TVGrow/2);

fill(117, 76, 41);
rect(580, 440, TV + 420 + TVGrow, TV + 90 + TVGrow);

fill(156, 126, 89);
rect(530,440, TV + 260 + TVGrow/1.5, TV + 40 + TVGrow/1.5);

fill(56, 38, 16);
rect(985 + TV/5 - 100 + TVGrow/2,440 + TV/5 - 100, BassSpeaker - 470, BassSpeaker); //- TV + 500) - TV + 40


// This changes the TV colour
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
stroke(0);
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

// This displays the text
if(counter>= 0 && counter <= 300){
   textAlign(CENTER)
}
if(counter>= 0 && counter <= 368){

fill(147, 178, 201);
textSize(150);
textFont('Courier New');
text("BEIRD", 562 + TV/10, 485 + TV/10);
}
if(counter>= 692 && counter <= 771){
   fill(147, 178, 201);
   textSize(100);
   textFont('Courier New');
   text("BY", 562 + TV/10, 465 + TV/10);
}
if(counter>= 848 && counter <= 1002){ // 848, 1002
   fill(147, 178, 201);
   textSize(120);
   textFont('Courier New');
   text("JACK", 553 + TV/10, 420 + TV/10);

   fill(147, 178, 201);
   textSize(130);
   textFont('Courier New');
   text("STAUBER", 553 + TV/10, 530 + TV/10);

}
if(counter>=10858 && counter <= 11015){
   fill(108, 137, 161);
   textSize(120);
   textFont('Courier New');
   text("THE END", 555 + TV/10, 465 + TV/10);
}

// This displays the 'DVD' logo
let BassFrame = int(map(bass,0,50,200,300))

if(counter>=2540 && counter <=3037){ //2540, 3037
   x1 = x1 + speedX
   y1 = y1 + speedY

   push();
   scale(0.4);
   rectMode(CENTER);
   image(DVD, x1 + 620, y1 + 600, BassFrame - 50, BassFrame - 100);
   pop();

} else if (counter>=3038 && counter <=3900){
   negativex = negativex - speedX1
   negativey = negativey + 1 - speedY1

   push();
   scale(0.4);
   tint(201, 224, 242)
   rectMode(CENTER);
   image(DVD, negativex + 2125, negativey + 1590, BassFrame - 50, BassFrame - 100);
   pop();

} else if(counter>=6235 && counter <=6732){ // 6235, 6732
   x = x + speedX
   y = y + speedY

   push();
   scale(0.4);
   rectMode(CENTER);
   tint(143, 178, 201);
   image(DVD, x + 620, y + 600, BassFrame - 50, BassFrame - 100);
   pop();

} else if (counter>=6733 && counter <=7246){ // 6733, 7460
   negativex1 = negativex1 - speedX
   negativey1 = negativey1 + 1 - speedY

   push();
   scale(0.4);
   rectMode(CENTER);
   tint(175, 205, 224);
   image(DVD, negativex1 + 2120, negativey1 + 1600, BassFrame - 50, BassFrame - 100);
   pop();

} else if (counter>=7247 && counter <=7600){ // 7247
   x2 = x2 + speedX
   y2 = y2 + speedY

   push();
   scale(0.4);
   rectMode(CENTER);
   tint(125, 159, 181);
   image(DVD, x2 + 620, y2 + 1160, BassFrame - 50, BassFrame - 100);
   pop();

}

// This is the TV static overlay
push();
scale(0.9);
tint(255, 20);
image(Static, 325 - TV/10, 269 + TVGrow*300, TV + 280 - TVGrow*10- TVGrow/1.5*10, TV - TVGrow/1.5*10 + 50);
pop();

tint(255)

// This is the frame where its blurry
if(counter>=118 && counter <=175){
push();
scale(1.29);
rectMode(CENTER)
image(Blur, 0, 0); //800
pop();
}

// This plays the singing animation
if(counter>=115 && counter <= 220){ // 115 to 220
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
} else if(counter>= 1304 && counter <= 2540){ //Singing 1 (1304)
 let VocalFrame = int(map(vocal, 18, 97, 0,4));
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
} else if (counter>= 8541 && counter <= 8666){ // 8541 and 8600
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
} else if (counter>= 8667 && counter <= 9944){
   let VocalFrame = int(map(vocal, 15,110, 0,4));
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



}

// MOVIE ENDS AT 11376.