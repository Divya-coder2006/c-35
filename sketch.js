var ball,database, position;

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  ball = createSprite(250,250, 20,20);
  ball.shapeColor ="red";
  var ballposition = database.ref('ball/position');
  ballposition.on("value",readPosition,showError);
}

function draw() {
  background(0); 
  if(position!==undefined){
     if(keyDown(UP_ARROW)){
    updatePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    updatePosition(0,1);
  }
  else if(keyDown(RIGHT_ARROW)){
    updatePosition(1,0);
  }
  else if(keyDown(LEFT_ARROW)){
    updatePosition(-1,0);

  }
  }
 
  
 
  drawSprites();
}

function updatePosition(x,y){
 database.ref('ball/position').set({
 'x': position.x+x , 
 'y': position.y+y 
 })
}

function readPosition(data){
  position = data.val();
  ball.x = position.x;
  ball.y = position.y;
}

function showError(){
  console.log("data not received");

}