function setup() {
  
  var d = 40;
  var p1 = d;
  var p2 = p1+d;
  var p3 = p2+d; //90
  var p4 = p3+d;

  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background(80);
  noSmooth();

  translate(140, 0);

  stroke(255);
  line(200,200, 300, 200)
  line(200,200,200,180)
  line(200,180,300,180)
  line(300,180,300,160)
  line(300,160,320,190)
  line(320,190,300,220)
  line(300,220,300,200)


  // Draw gray box
  stroke(158);
  line(p3, p3, p2, p3);
  line(p2, p3, p2, p2);
  line(p2, p2, p3, p2);
  line(p3, p2, p3, p3);

  // Draw white points
  stroke(255);
  point(10, 10);
  point(p1, p3); 
  point(p2, p4);
  point(p3, p1); 
  point(p4, p2);
  point(p4, p4);
}