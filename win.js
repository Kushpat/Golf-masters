var canvas= new fabric.Canvas('myCanvas');
var score=localStorage.getItem("score", score);

hole_x=1000;
hole_y=440;

ball_x=280;
ball_y=140;

ball_object="";

hole_object="";

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("unnamed.png", function(Img){
hole_object=Img;

hole_object.scaleToWidth(1000);
hole_object.scaleToHeight(500);

hole_object.set({
top:0,
left:120
});
canvas.add(hole_object);


	});

}


