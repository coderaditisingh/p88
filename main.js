var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;
player_x = 10;
player_y = 10;
var player_object = "";

function load_img(){
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	fabric.Image.fromURL(get_image,function(Img){
		block_image_object = Img;
	
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
		top:player_y,
		left:player_x
		});
		canvas.add(block_image_object);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	keypressed = e.keyCode;
console.log(keypressed);
if(e.shiftKey==true && keypressed =='80')
{
console.log("shift & P pressed together");
block_image_width  += 10;
block_image_height += 10;

document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		
		if(player_y>=0)
		{
		  player_y -=block_image_height;
		  console.log("height of block image = " + block_image_height);
		  console.log("when up arrow is pressed y = "+ player_y + "x = "+ player_x);
		  canvas.remove(player_object);
		  player_update();
		}
		// Write a code to move ball upward.
	}

	function down()
	{if(player_y<=500)
		{
		  player_y +=block_image_height;
		  console.log("height of block image = " + block_image_height);
		  console.log("when up arrow is pressed y = "+ player_y + "x = "+ player_x);
		  canvas.remove(player_object);
		  player_update();
		}

		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			if(player_x>=0)
			{
			  player_x -=block_image_height;
			  console.log("height of block image = " + block_image_height);
			  console.log("when up arrow is pressed y = "+ player_y + "x = "+ player_x);
			  canvas.remove(player_object);
			  player_update();
			}
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			if(player_x<=850)
    {
      player_x +=block_image_height;
      console.log("height of block image = " + block_image_height);
      console.log("when up arrow is pressed y = "+ player_y + "x = "+ player_x);
      canvas.remove(player_object);
      player_update();
    }
			// Write a code to move ball right side.
		}
	}
	
}

