#pragma strict
//controls cube speed
var speed:int;


function Start () {

}

function Update () {
	
	//move according to the horizontal arrow keys and the speed
	
	transform.Translate(Vector3.left * speed * Input.GetAxis("Horizontal"));
	
}