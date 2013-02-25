#pragma strict
//controls cube speed
var speed:int;
//slot for the text theme
var theme:GUISkin;


//borders
var leftmost:float;
var rightmost:float;
var topmost:float;
var bottommost:float;


function Start () {

}

function Update () {
	
	
	//I know screen width and screen height. Therefore can calculate the borders as follows
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	
	//x coordinates
	
	if (transform.position.x > (rightmost-1))
	{
		transform.position.x = (rightmost-1);
	}
	
	if (transform.position.x < (leftmost+1))
	{
		transform.position.x = (leftmost+1);
	}
	
	//y coordinates
	if (transform.position.y > (topmost-1))
	{
		transform.position.y = (topmost-1);
	}
	
	if (transform.position.y < (bottommost + 1))
	{
		transform.position.y = (bottommost+1);
	}
	
	
	
	
	
	//move according to the horizontal arrow keys and the speed
	transform.Translate(Vector3.right * speed * Input.GetAxis("Horizontal"));
	transform.Translate(Vector3.up * speed * Input.GetAxis("Vertical"));
	
	
	
	
	
	//if escape is pressed
	if (Input.GetKeyDown(KeyCode.Escape))
	{
		Application.LoadLevel(0);
	}
	
	
	
}

function OnGUI()
{
	GUI.skin = theme;
	
//	GUI.color = Color.red;
	
	
	//current position of the player
	GUI.Label(Rect(0,45,200,30),"X position: "+transform.position.x);
	GUI.Label(Rect(0,70,200,30),"Y position: "+transform.position.y);
	
	
	//output of the coordinates of the borders on screen
	GUI.Label(Rect(0,100,200,30),"Leftmost: "+leftmost);
	GUI.Label(Rect(0,130,200,30),"Rightmost: "+rightmost);
	GUI.Label(Rect(0,160,200,30),"Topmost: "+topmost);
	GUI.Label(Rect(0,190,200,30),"Bottommost: "+bottommost);
	
	
	
	
}