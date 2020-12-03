var wall, bullet; 
var speed, weight, thickness;
var status;
var a = 1;
var gun, gunImg;
function preload(){
  gunImg = loadImage('gun_PNG1365.png')
}
function setup() { 
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight =  random(30,52);
  thickness = random(22,83);

  
  wall = createSprite(1000,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet = createSprite(50,200,50,20);
  bullet.velocityX = speed;
  bullet.shapeColor = 'white';

  gun = createSprite(130,250);
  gun.addImage('gun',gunImg);
  gun.rotateToDirection = true;
 
 
}

function gunAnimation(){
  
  if(a === 1){
    gun.rotation -=8;
    if(gun.rotation <= -45){
      a = 2;
    }
  } 
  if(a === 2){
    gun.rotation +=4;
    if(gun.rotation >= 0 ){
      a = 0;
    }
  }
  
  
  
}
function draw() { 
background(0,0,0); 
gunAnimation()




if(touch(bullet,wall)){ 
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed**2/thickness**3
  if(damage<10){
    wall.shapeColor = color(0,255,0);
    status = 'Fail';
  }
  else if(damage>10){
    wall.shapeColor = color(255,0,0);
    status = 'Pass';
  }
  

     
    }
    if(keyWentDown('r')){
      a = 1;
      gunAnimation()
      damage = 0;
      wall.shapeColor = color(80,80,80);
      bullet.x = 50;
      speed = random(223,321);
      weight =  random(30,52);
      thickness = random(22,83);
      bullet.velocityX = speed;
      wall.width = thickness;
      status = undefined;
  
  
    }
      drawSprites(); 
      
      textSize(30);
      fill(255,255,255);
      text("Press 'R' to reset",500,350)
      textSize(20);
      fill(0,200,255)
      text('Speed: '+speed,1100,40);
      text('Weight: '+weight,1100,80);
      text('Thickness: '+thickness,1100,120);
      text('Dameage: '+damage,1100,160);

      if(status === 'Fail'){
        fill(255,0,0);
      }
      if(status === 'Pass'){
        fill(0,255,0);
      }
      text('Status: '+status,1100,200);

      //console.log(deformation);
      
      console.log(gun.rotation);
    }
    function touch(a,b){
      if(a.x+a.width/2>= b.x-b.width){
        return true
      }
      else{
        return false
      }

    }
