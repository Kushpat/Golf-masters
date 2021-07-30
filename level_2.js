var canvas= new fabric.Canvas('myCanvas');
var score=localStorage.getItem("score", score);

hole_x=50;
hole_y=50;

ball_x=800;
ball_y=400;

ball_object="";

hole_object="";

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
hole_object=Img;

hole_object.scaleToWidth(50);
hole_object.scaleToHeight(50);

hole_object.set({
top:hole_y,
left:hole_x
});
canvas.add(hole_object);


	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_object=Img;

		ball_object.scaleToWidth(50);
		ball_object.scaleToHeight(50);

		ball_object.set({
top:ball_y,
left:ball_x
		});
		canvas.add(ball_object)
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(score==0){
		window.location="loss.html";
	}
	if((ball_x== hole_x)&&(ball_y== hole_y)){
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML="You scored!"
		document.getElementById("myCanvas").style.borderColor="red";
		document.getElementById("hd2").innerHTML="Press space to continue"
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
			score= score-1;
			localStorage.setItem("score", score);
		document.getElementById("hd4").innerHTML= "Score:" + score;
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
			score= score-1;
			localStorage.setItem("score", score);
		document.getElementById("hd4").innerHTML= "Score:" + score;
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
			score= score-1;
			localStorage.setItem("score", score);
		document.getElementById("hd4").innerHTML= "Score:" + score;
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
			score= score-1;
			localStorage.setItem("score", score);
		document.getElementById("hd4").innerHTML= "Score:" + score;
			
		}
	}
	
	function up()
	{
	if(ball_y>=50){
		ball_y = ball_y - 10;
			 console.log("When up is pressed, X=" + ball_x + " , y= " + ball_y);
		console.log("block image width= " + block_image_width);
		canvas.remove(ball_object);
		new_image();
	}
	}

	function down()
	{
		 if(ball_y <= 1100){
			 ball_y = ball_y + 10;
			 console.log("When down is pressed, X=" + ball_x + " , y= " + ball_y);
		console.log("block image width= " + block_image_width);
		canvas.remove(ball_object);
		new_image();
		

		 }
	}

	function left()
	{
		if(ball_x >50)
		{
			ball_x= ball_x-10;
			console.log("When left is pressed, X=" + ball_x + " , y= " + ball_y);
		console.log("block image width= " + block_image_width);
		canvas.remove(ball_object);
		new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x + 10;
			console.log("When right is pressed X=" + ball_x + " , Y= " + ball_y);
			console.log("block image width= " + block_image_width)
			canvas.remove(ball_object);
			new_image();
		}
	}

    if(keyPressed== '32'){
        window.location="level_3.html";
    }
	

	}
	
