var canvas;
var enemies, weapon;
var ninja,ninjastar;


function preload()
{
    ninjahattori=loadImage("Daco_262563.png")
monsters=loadImage("Daco_1677878.png");
};

function setup()
{
canvas = createCanvas(1200,550);


ninja= createSprite(100,400);
ninja.scale=0.1;
ninja.addImage(ninjahattori);
ninjastar=createSprite(800,800);
weapon=createSprite(1000,1000);
};

function draw (){
background("red")
if(frameCount%200==0){
    enemies=createSprite(1300,400);
    enemies.velocityX=-2;
    enemies.addImage(monsters)
    enemies.scale=0.2;
    
}

drawSprites();
};


