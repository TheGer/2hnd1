#pragma strict

var x:float;
var y:float;

//theme for menu style
var theme:GUISkin;


function Start () {

}

function Update () {
	
}

function OnGUI()
{
	x = Screen.width/2;
	y = Screen.height/2;
	
	
	//to cusomize the style of the label
	GUI.skin = theme;
	
	
	GUI.Label(Rect(x-150,y-10,300,25),"Welcome to Tom and Jerry");

	if(GUI.Button(Rect(x-50,y+18,100,25),"New Game"))
	{
		//new game was pressed
		//scene 1...the main screen scene
		Application.LoadLevel(1);
	}
	

}