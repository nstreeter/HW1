// Help Rudy the Red Dot collect all the green dots!

// Control Rudy with the following commands:
//  up();                   -- moves Rudy up one square
//  down();                 -- ...down one square
//  left();                 -- ...left one square
//  right();                -- ...right one square

// Interact with Rudy's environment using the following commands:
//  remainingDots();        -- returns the number of green dots remaining
//  getColor();             -- returns the color of Rudy's square
//  setColor(color);        -- changes the color of Rudy's square, opens gates if colors match
function repeatdown(total) {
  var count =0;
  while(count<total){
    down();
    count=count+1;
  }
}

function repeatright(total) {
  var count =0;
  while(count<total){
    right();
    count=count+1;
  }
}

function repeatup(total) {
  var count=0;
  while(count<total){
    up();
    count=count+1;
  }
}
 
repeatright(1);
repeatdown(4);

if (getColor()=="green") {
  repeatdown(1);
  setColor("green");
  repeatright(2);
  repeatup(1);
  repeatright(1);
}
if (getColor()=="yellow") {
  repeatdown(1);
  setColor("yellow");
  repeatright(2);
  repeatup(1);
  repeatright(1);
}
if (getColor()=="blue") {
  repeatdown(1);
  setColor("blue");
  repeatright(2);
  repeatup(1);
  repeatright(1);
}
if (getColor()=="red") {
  repeatdown(1);
  setColor("red");
  repeatright(2);
  repeatup(1);
  repeatright(1);
}

if(getColor()=="yellow") {
  repeatdown(1);
  setColor("yellow");
  repeatright(2);
}
if(getColor()=="red") {
  repeatdown(1);
  setColor("red");
  repeatright(2);
}
if(getColor()=="blue") {
  repeatdown(1);
  setColor("blue");
  repeatright(2);
}
if(getColor()=="green") {
  repeatdown(1);
  setColor("green");
  repeatright(2);
}
