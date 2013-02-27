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

//placeholder for mouse
var mouseSlot:Rigidbody;

var mouseControl:boolean;

var showText:boolean;

var paused:boolean;

function Start () {
	mouseControl = false;
	
	showText = false;
	
	paused = false;
}

function Update () {
	//toggle show text if I press H
	if (Input.GetKeyDown(KeyCode.H))
	{
		showText = !showText;
	}
	
	if (Input.GetKeyDown(KeyCode.P))
	{
		paused = !paused;
	}
	
	if (paused == true)
	{
		//pause the game
		Time.timeScale = 0;
	}
	else
	{
		Time.timeScale = 1;
	}

	var mouseWorldX:float;
	var mouseWorldY:float;
	//
	/*
	mouseWorldX = Camera.main.ScreenToWorldPoint(Vector3(Input.mousePosition.x,0,0)).x;
	mouseWorldY = Camera.main.ScreenToWorldPoint(Vector3(0,Input.mousePosition.y,0)).y;

	transform.position.x = mouseWorldX;
	transform.position.y = mouseWorldY;
	*/
	//equivalent to
	if (mouseControl == true)
	{
	transform.position = Camera.main.ScreenToWorldPoint(Vector3(Input.mousePosition.x,Input.mousePosition.y,2));
	}
	
	
	
	if (Input.GetKeyDown(KeyCode.M))
	{
		mouseControl = !mouseControl;
		//if mouse control is false, set it to true, and if mouse control is true, set it to false.
	}
	
	//x coordinates
	if (transform.position.x > BorderController.rightmost)
	{
		transform.position.x = BorderController.leftmost;
	}
	
	if (transform.position.x < BorderController.leftmost)
	{
		transform.position.x = BorderController.rightmost;
	}
	
	//y coordinates
	if (transform.position.y > BorderController.topmost)
	{
		transform.position.y = BorderController.bottommost;
	}
	
	if (transform.position.y < BorderController.bottommost)
	{
		transform.position.y = BorderController.topmost;
	}
	
	//move according to the horizontal arrow keys and the speed
	transform.Translate(Vector3.right * speed * Input.GetAxis("Horizontal") * Time.deltaTime);
	transform.Translate(Vector3.up * speed * Input.GetAxis("Vertical") * Time.deltaTime);
	
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
	
	if (showText == true)
	{
	//current position of the player
	GUI.Label(Rect(0,45,200,30),"X position: "+transform.position.x);
	GUI.Label(Rect(0,70,200,30),"Y position: "+transform.position.y);
	
	
	//output of the coordinates of the borders on screen
	GUI.Label(Rect(0,100,200,30),"Leftmost: "+BorderController.leftmost);
	GUI.Label(Rect(0,130,200,30),"Rightmost: "+BorderController.rightmost);
	GUI.Label(Rect(0,160,200,30),"Topmost: "+BorderController.topmost);
	GUI.Label(Rect(0,190,200,30),"Bottommost: "+BorderController.bottommost);
	
	//mouse pointer coordinates. Variable is built into unity.
	GUI.Label(Rect(0,220,200,30),"MouseX (in pixels): "+Input.mousePosition.x);
	GUI.Label(Rect(0,250,200,30),"MouseY: (in pixels): "+Input.mousePosition.y);
	
	}
	
}