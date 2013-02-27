#pragma strict
var direction:int;
var speed:int;

function Start () {
	transform.position.x = Random.Range(BorderController.leftmost,BorderController.rightmost);
	transform.position.y = Random.Range(BorderController.bottommost,BorderController.topmost);
	
	direction = Mathf.Round(Random.Range(1,4));
	speed = Random.Range(1,10);
	
	
}

function Update () {
	//borders fix
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
	
	


	if (direction==1)
	{
		//move mouse left
		transform.Translate(Vector3.left * speed * Time.deltaTime);
			
	}
	if (direction==2)
	{
		transform.Translate(Vector3.right * speed * Time.deltaTime);
		
	}
	
	if (direction==3)
	{
		transform.Translate(Vector3.up * speed * Time.deltaTime);
		
	}
	
	if (direction == 4)
	{
		transform.Translate(Vector3.down * speed * Time.deltaTime);
	}
	
	

}



















