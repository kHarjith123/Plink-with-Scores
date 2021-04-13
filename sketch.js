var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles ;
var plinkos = [];
var divisions = [];

var gameState =  "PLAY" ; 


var divisionHeight=300;
var score =0;
var count =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30)
  Engine.update(engine);

  if(count === 5 ){
    gameState = "END"
  }
 
  if(gameState === "END"){
    textSize(32);
    text("GAME OVER",400,400);
  }

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  //for (var j = 0; j < particles.length; j++) {
   
    // particles[j].display();
   //}

  if (particles!= null){

    particles.display();

    if(particles.body.position.y > 760 && particles.body.speed < 2 && gameState === "PLAY"){

    
    
    if (particles.body.position.x < 300 ){
      score = score+ Math.round(random(100,500));
      //particles = null

    }

    if (particles.body.position.x > 301 && particles.body.position.x < 600){
      score = score + Math.round(random(100,200));
    //  particles = null
      
    }

    if (particles.body.position.x > 601 && particles.body.position.x < 900){
      score = score+ Math.round(random(100,300));
    //  particles = null
      
    }
  }
  }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  }

function mousePressed(){
  if(gameState === "PLAY"){
  particles = new Particle(mouseX,10,10);
  //score++;
  count++;
  }
 
}
