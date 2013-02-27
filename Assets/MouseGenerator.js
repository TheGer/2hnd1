#pragma strict
//the slot where I put the mouse prefab
var mouseTemplateSlot:Rigidbody;
var numberOfMice:int;

function generateOneMouse()
{	
	Instantiate(mouseTemplateSlot,Vector3(0,0,2),Quaternion.identity);
}


function generateTwentyMice()
{
	//create twenty mice, instantly
	var counter:int;
	
	//twenty mice
	for(counter=0;counter<20;counter++)
	{
		Instantiate(mouseTemplateSlot,Vector3(0,0,2),Quaternion.identity);
	}
}

function Start () {
	//call generate one mouse after half a second, and then generate a mouse per second
	//InvokeRepeating("generateOneMouse",0.5,1.0);
	generateTwentyMice();
}

function Update () {
	
	numberOfMice = GameObject.FindGameObjectsWithTag("mouse").length;

/*	
	if (numberOfMice == 20)
	{
		CancelInvoke("generateOneMouse");
	}
*/
}


function OnGUI(){
	GUI.color = Color.black;
	GUI.Label(Rect(0,0,200,25),"Number of Mice: "+numberOfMice);

}