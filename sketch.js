let cor;
let x;
let y;

function setup() {
 createCanvas(400, 400);
 background(random(0, 150), (0, 150), (0, 150));
 
 
 cor = color(random(150, 255), random(150 ,255), random(150, 255));
 x = [0, 0, 0];
 y = [random(height), random(height), random(height)];
}

function draw() {

 fill (cor);
 
 for(let contador in x) {
circle (x[contador], y[contador], random(10, 60)); 
 x[contador] += random(0, 4);
 y[contador] += random(-3, 3);   

 
 if(x[contador] >= width) {
   x[contador] = 0;
   y[contador] = random(height);
   }
 } 
 if(mouseIsPressed) {
   cor = color(random(150, 255), random(150 ,255), random(150, 255)) }
}