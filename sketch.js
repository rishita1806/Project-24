const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bgimg;
var engine, world;
var plane;
var stone;
var rubber;
var iron;
var hammer;

function preload(){
    bgimg = loadImage("bg.jpg");
}


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    stone = new Stone(290,550,50,50);
    rubber = new Rubber(600,500,100);
    iron = new Iron(750,550,100,50);
    hammer = new Hammer(10,100);
}

function draw(){
    background(bgimg);
    Engine.update(engine);

    plane.display();
    stone.display();
    rubber.display();
    iron.display();
    hammer.display();

}