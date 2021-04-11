const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg)
    }

    Engine.update(engine);

    // write code to display time in correct format here
    noStroke();
    textSize(30);
    fill("black");
    if(hour>=13){
        text("Time: " + hour%12 + "PM", 50, 100);
    } else if(hour==0){
        text("Time: 0AM", 100,100);
    } else if(hour==12){
        text("Time: 12PM", 100, 100);
    } else{
        text("Time: " + hour%12 + "AM", 50, 100);
    }


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Europe/London")
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
    hour = datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        debugger;
        bg = "sunrise1.png";
    } else if(hour>=06 && hour<=08){
        debugger;
        bg = "sunrise2.png";
    } else if(hour>=08 && hour<=10){
        debugger;
        bg = "sunrise3.png";
    } else if(hour>=10 && hour<=11){
        debugger;
        bg = "sunrise4.png";
    } else if(hour>=11 && hour<=13){
        debugger;
        bg = "sunrise5.png";
    } else if(hour>=13 && hour<=15){
        debugger;
        bg = "sunrise6.png";
    } else if(hour>=15 && hour<=16){
        debugger;
        bg = "sunset7.png";
    } else if(hour>=16 && hour<=18){
        debugger;
        bg = "sunset8.png";
    } else if(hour>=18 && hour<=19){
        debugger;
        bg = "sunset9.png";
    } else if(hour>=19 && hour<=20){
        debugger;
        bg = "sunset10.png";
    } else if(hour>=20 && hour<=22){
        debugger;
        bg = "sunset11.png";
    } else if(hour>=22 && hour<=03){
        debugger;
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
