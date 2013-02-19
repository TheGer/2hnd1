#pragma strict


//string variable
var myName:String;

//int variable
var myAge:int;

//current temperature (decimal places)
var currTemp:float;


function Start () {

}

function Update () {

}

//to write text on screen
function OnGUI(){
	//this code sets the color of the text to red
	GUI.color = Color.red;//note every line ends with a semicolon
	
	//to show text, create a GUI Label
	//Rect(x,y,width,height)
	GUI.Label(Rect(10,10,300,50),"Hello World, your name is: "+myName);
	
}
