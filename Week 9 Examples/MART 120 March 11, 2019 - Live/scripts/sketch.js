let img, enemy;
var x = 200;
var y = 200;
var count = 0;
var enemyX = 400;
var enemyY = 500;

function setup() {
    createCanvas(1000,800);
}

function draw() {
   
    background(0);
    fill(123,29,23);
    if(keyIsPressed)
    {
        if(key == "a")
        {
            x-=10;
        }
        if(key == "d")
        {
            x+=10;
        }
        if(key == "w")
        {
            y-=10;
        }
    
        if(key == "s")
        {
            y+=10;
        }
    }
    rect(x,y,200,150);
         
}

function keyPressed() {
   /* if(key == "a")
    {
        print("in a");
        x-=10;
    }
    else if(key == "d")
    {
        print("in d");
        x+=10;
    }
    else if(key == "w")
    {
        y-=10;
    }

    else if(key == "s")
    {
        y+=10;
    }
    */
  }




