function setup()
 {
  createCanvas(800, 800);
}

function draw()
{
 background(41,74,74);
 fill(255);

 ellipse(mouseX, mouseY, 100, 100);

 drawDonut(255,132,196,100,100);
 drawDonut(247,214,41,300,100);
 drawDonut(156,206,82,400,200);  
 drawDonut(45,99,214,500,300);

}

function drawDonut(r,g,b,x,y)
{
 //doughnut #1
 fill(r,g,b,255);
 ellipse(x, y,200,200);
 fill(41,74,74);
 ellipse(x, y,120,120);


}