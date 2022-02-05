var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_x; var last_position_y;


var color = "red";

ctx.beginPath()
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
  mouseEvent = "mouseDown";
}


canvas.addEventListener("mousemove", mousemove);
function mousemove(e)
{
  var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  var current_position_of_mouse_y = e.clientY - canvas.offsetTop;


  if(mouseEvent == "mouseDown")
  {
    color = document.getElementById("color").value;
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 40 ,0 , 2*Math.PI);
    ctx.stroke()
  }

  last_position_x = current_position_of_mouse_x;
  last_position_y = current_position_of_mouse_y;

}

canvas.addEventListener("mouseup", mouseup);
function mouseup(e)
{
  mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", mouseleave);
function mouseleave(e)
{
  mouseEvent = "mouseleave";
}

function clearArea()
{
  console.log("Hello");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
