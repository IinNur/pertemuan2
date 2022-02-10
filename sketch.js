function setup() {
  // put setup code here
  createCanvas(400,400);
  j = 0;
}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(8)
  point(100,100) 
  line(0,0,50,200)

 fill(205, 133, 63)
  rect(150,20,25,100);

  strokeWeight(3)
  stroke(225, 248, 220)
  fill(240, 128, 128)
  ellipse(150,50,20,20);
  ellipse(200,120,20,20);

  strokeWeight(0)
  //noStroke()

  fill(251, 160, 122)
  strokeJoin(ROUND)
  triangle(20,20,40,40,60,20)
  square(50,80,40,20);
  arc(70,50,40,40, radians(0), radians(200));


  strokeWeight(5)
  beginShape();
  vertex(300,50)
  vertex(350,100)
  vertex(300,15)
  vertex(250,250)
  endShape(CLOSE);


  for (var i=0; i<=400; i++){
    x = i 
    y = 300 + 20*Math.sin(x/20)
    point(x,y)
  }
 
  var y = 200 + 20*Math.sin(PI*j/20)
  var r = 50 + 10*Math.sin(PI*j/20)
  j += 1
  fill(216, 191, 216)
  ellipse(300,y,r,r)
}
