const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var div1,div2,div3,div4,div5,div6,div7,div8;
var count=0;
var score=0;
var plinkos = [];
var  particle;
var particles= [];
//var divisions = [];
var gameState="start"

function setup() {
  createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);

  ground = new Ground(400,795,800,10);

  div1 = new Division(0,650,10,300);
  div2 = new Division(100,650,10,300);
  div3 = new Division(200,650,10,300);
  div4 = new Division(300,650,10,300);
  div5 = new Division(400,650,10,300);
  div6 = new Division(500,650,10,300);
  div7 = new Division(600,650,10,300);
  div8 = new Division(700,650,10,300);


  for(var i =40;i <= width;i=i+50){
    plinkos.push(new Plinko(i,75,10));
  }
  for(var i =15; i <= width-10; i=i+50){
    plinkos.push(new Plinko(i,175,10));
  }
  for(var i =40; i <= width; i=i+50){
    plinkos.push(new Plinko(i,275,10));
  }
  for(var i =15; i <= width;i=i+50){
    plinkos.push(new Plinko(i,375,10));
  }
}

function draw() {
  background("black");
  textSize(20)
  fill("white")
  text("score-"+score,600,50);
  Engine.update(engine);
  for(var i=0; i<plinkos.length; i++){
  plinkos[i].display();

  text("500",45,525);
  text("500",145,525);
  text("500",245,525);
  text("100",345,525);
  text("100",445,525);
  text("100",545,525);
  text("200",645,525);
  text("200",745,525);
  //text("200",670,525);
 // text("200",750,525);
  }

  /*if(frameCount%60 ===0){
    particles.push(new Particle(random(90,130),10,10))
  }*/

  /*for(var j=0; j<particles.length; j++){
    particles[j].display();
    }  */

 
  ground.display();

  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  div8.display();  
  //drawSprites();
  
  
if(particle!=null)
    {
      console.log("hii")
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300 && particle.body.position.x>0 ) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 800 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";
      }                  
    }
  }
  
}




function keyPressed(){

    if(keyCode === DOWN_ARROW){
  if(gameState==="start")
  {
     count++;
     console.log(count);
   particle=new Particle(mouseX, 10, 10); 
   console.log("hii");
  }   
}
}
