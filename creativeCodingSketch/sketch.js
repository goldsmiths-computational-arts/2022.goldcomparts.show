class Neuron {
  constructor(_x,_y){
    this.pos =new createVector(_x,_y)
    this.origPos=new createVector(_x,_y);
    this.vel = new createVector(0,0);
    this.connectionsPos=[];
    this.connectionsIndex=[];
    this.connectionsFiring=[]
    this.threshold=random(0.1,1);
    this.value=0;
    this.activated=false
    this.cooldown=0;
    this.drawn=false;
    if (random(0,1)>1.0-DRAWPROB){
      this.drawn=true;
    }
    
  }
  
  getConnections(Neurons){
     for (let i=0;i<numNeurons;i++){
       let distance=dist(Neurons[i].pos.x,Neurons[i].pos.y,this.pos.x,this.pos.y);
       if(distance<THRESHDISTANCE && distance>1){
         if (random(0,1)<0.9){
             this.connectionsPos.push(Neurons[i].pos);
             this.connectionsIndex.push(i);
             this.connectionsFiring.push(false);
         }
       }
     }
  }

  move(size){
    let multi = 0.8;
    let noiseValue=10* noise(this.pos.x*0.1,this.pos.y*0.1)
    if (size){
      multi=25;
    }
    this.vel.x+= multi * cos( noiseValue);
    this.vel.y+= multi * sin( noiseValue);
    this.vel.x-=0.12*(this.pos.x-this.origPos.x);
    this.vel.y-=0.12*(this.pos.y-this.origPos.y);

    let mag=sqrt(this.vel.x*this.vel.x+this.vel.y*this.vel.y);
  
    if (mag>7 && !size){
      this.vel.x=this.vel.x/mag;
      this.vel.y=this.vel.y/mag;
    }
    this.pos=this.pos.add(this.vel);


  }
  
  check(){
    
    if(this.value>this.threshold ){
      this.activated=true;
      this.cooldown=5;
    }
    else{
      this.activated=false;
      if(this.cooldown>0){
        this.cooldown-=0.2;
      }
    }
  }
  
  fire(){
    let recievers=[];
    if (this.activated){
      for(let i=0;i<this.connectionsFiring.length;i++){
        if (Neurons[this.connectionsIndex[i]].cooldown<0.1){
          recievers.push(i);
        }
      }
    }
    else{
      for(let i=0;i<this.connectionsFiring.length;i++){
        this.connectionsFiring[i]=false;
      }
    }
    
    let share=this.value/recievers.length;    
    for(let i=0;i<recievers.length;i++){
          let tempIndex=recievers[i];
          this.connectionsFiring[tempIndex]=true;
          Neurons[this.connectionsIndex[tempIndex]].value+=share;
          this.value-=share;
    }

  }
  
  decay(){
    this.value-=0.5;
    this.value=max(this.value,0);
  }
  
  drawNeurons(){
    strokeWeight(1);

    stroke(0,0,0,2);
    fill(255,255,255,255);
    if(this.activated && this.cooldown>4){
      fill(0,random(100,255),random(100,255),50);
    }
    circle(this.pos.x,this.pos.y,10);
  }

  drawConnections(){
    for(let i=0;i<this.connectionsIndex.length;i++){
      strokeWeight(1);
      stroke(0,0,0,20);

      if (this.connectionsFiring[i]){
        strokeWeight(2);
        stroke(0,random(100,255),random(100,255),80);
        let tempPosX=Neurons[this.connectionsIndex[i]].pos.x;
        let tempPosY=Neurons[this.connectionsIndex[i]].pos.y;
  
        line(this.pos.x,this.pos.y,tempPosX,tempPosY);  
      }

      else if (this.drawn){
        let tempPosX=Neurons[this.connectionsIndex[i]].pos.x;
        let tempPosY=Neurons[this.connectionsIndex[i]].pos.y;
  
        line(this.pos.x,this.pos.y,tempPosX,tempPosY);
      }
      
    }
  }
  
}


let Neurons=[];
let pointData;
let pointsX=[];
let pointsY=[];
let pointDataSmall;
let pointsXSmall=[];
let pointsYSmall=[];
let numNeurons;
let img;
let temp_img;

let DRAWPROB = 0.2;
let THRESHDISTANCE  = 55;
let MobileThreshold = 600;
let DELAY = 1;
let buttonFont;
let titleFont;


let mode ="desktop";
let buttonDictionaryDesktop;
let buttonDictionaryTablet;
let buttonDictionaryMobile;

function preload(){
    pointData=loadTable("data/points1.5k.csv",'csv');
    pointDataSmall=loadTable("data/pointsmobile.csv",'csv');
    
    img = loadImage('data/4.png');
    
    
    buttonFont = loadFont('fonts/DotGothic16-Regular.ttf');
    titleFont = loadFont('fonts/Neutraface_Slab_Display_Light.otf');
  }

function setup() {

  
  tableHelper();
  createCanvas(1440, 1024);
  
  
  reset();

  buttonDictionaryDesktop={
    0:["Machine Learning",width*0.8,height*0.675,"http://www.google.com"],
    1:["Performance",width*0.27,height*0.15,"http://www.google.com"],
    2:["Installation",width*0.9,height*0.18,"http://www.google.com"],
  };

  buttonDictionaryMobile={
    0:["Machine Learning",width*0.2,height*0.2,"http://www.google.com"],
    1:["Performance",width*0.2,height*0.3,"http://www.google.com"],
    2:["Installation",width*0.2,height*0.4,"http://www.google.com"],
  };
}

function draw() {
  if (frameCount<5){
    background(255);
  }
  
  background(255,255,255,50);
  fill(0);
  
  updateNeurons();
  tint(255,220);
  copy(img, 0, 0, img.width, img.height, 0, 0,windowWidth,windowHeight);
  hoverCheck();
  buttonCheck();
 
}

function tableHelper(){
  for (let r = 0; r < pointData.getRowCount(); r++){
    
    pointsX.push(pointData.getString(r,0));
    pointsY.push(pointData.getString(r,1));
  
  
  }

  for (let r = 0; r < pointDataSmall.getRowCount(); r++){
    pointsXSmall.push(pointDataSmall.getString(r,0));
    pointsYSmall.push(pointDataSmall.getString(r,1));
  }
}


function updateNeurons(){
 
  
  for( n of Neurons){
    n.check();
  
    if (frameCount%DELAY==0){
      if (random(0,1)>0.85){
        n.move(false);
      }
      n.fire();
    }
    n.drawConnections();
    n.decay();
  }

  if ( frameCount%30==0){
    random_neuron=int(random(0,Neurons.length));
    Neurons[random_neuron].value=200;
  }


}
function titlesDesktop(){
  strokeWeight(0.5);
  textSize(24);
  stroke(0,0,0,200)
  fill(0);
  textAlign(CORNER, CENTER);
  textFont(buttonFont)
  let h=height*0.6
  text("The Computational Arts MA/MFA Degree Show",120,h);
  h+=48+24
  textSize(60);
  stroke(0)
  fill(0);
  textAlign(CORNER, CENTER);
  textFont(buttonFont)
  text("(SUB)",110,h);
  h+=60+12;
  text("SYSTEMS",120,h);
  h+=60+24;
  textSize(24);
  stroke(0)
  fill(0);
  textAlign(CORNER, CENTER);
  textFont(buttonFont)
  text("1st - 4th September 2022",120,h);
}


function buttonCheck(){
  let valid=true;
  
  for (const [key, value] of Object.entries(buttonDictionaryDesktop)) {
    let x=value[1];
    let y = value[2];
    if (windowWidth<x || windowHeight<y){
      mode="mobile";
      valid=false;
    } 
  }
  
  if (valid){
    mode="desktop";
  }

 if (mode=="desktop"){
  buttonDesktop();
 }
 if (mode=="mobile"){
  buttonMobile();
 }

}

function buttonDesktop(){
  for (const [key, value] of Object.entries(buttonDictionaryDesktop)) {
    MakeButton(value[1],value[2],20,20,value[0]);
  }
}

function buttonMobile(){
  for (const [key, value] of Object.entries(buttonDictionaryMobile)) {
    MakeButton(value[1],value[2],20,20,value[0]);
  }
}

function MakeButton(x,y,pad_x,pad_y,input){
  textFont(buttonFont)
  stroke("#00FE00")
  fill(255,255,255);
  rectMode(CENTER);
  textSize(32);
  let w=pad_x+textWidth(input);
  let h=pad_y+32;
  rect(x,y,w,h);
  stroke(0)
  fill(0);
  textAlign(CENTER, CENTER);
  text(input,x,y-7);
}

function hoverCheck(){
  let buttonMode;
  if (mode=="desktop"){
     buttonMode=buttonDictionaryDesktop;
  }
  if (mode=="mobile"){
    buttonMode=buttonDictionaryMobile;
  }
  let hovering = false;
  for (const [key, value] of Object.entries(buttonMode)) {
    if (dist(value[1],value[2],mouseX,mouseY)<60){
      cursor(CROSS);
      hovering=true;

    }
  }
if(!hovering){
  cursor(ARROW);
  }
}

function mousePressed(){
  let pulsed=false;
  for( n of Neurons){
      if (dist(n.pos.x,n.pos.y,mouseX,mouseY)<40){
        if (!pulsed){
          n.value=300;
          pulsed=true;
        }
        n.move(true);
      }
  }

  let buttonMode;
  if (mode=="desktop"){
     buttonMode=buttonDictionaryDesktop;
  }
  if (mode=="mobile"){
    buttonMode=buttonDictionaryMobile;
  }
  for (const [key, value] of Object.entries(buttonMode)) {
    if (dist(value[1],value[2],mouseX,mouseY)<40){
      window.open(value[3]);
    }
  }
}



function reset(){
  background(0);
  THRESHDISTANCE  = windowWidth*0.045;
  Neurons=[];
  let idx=0;
  if (windowWidth>MobileThreshold){
    numNeurons=pointData.getRowCount();

    while (Neurons.length<numNeurons){
      angleMode=RADIANS;
      
      const x = map(floor(pointsX[floor(idx)])+random(-10,10),0,1440,0,windowWidth);
      const y = map(floor(pointsY[floor(idx)])+random(-10,10),0,1024,0,windowHeight);


      Neurons.push(new Neuron(x,y));
      idx++;
    }
    for (let i=0;i<numNeurons;i++){
      Neurons[i].getConnections(Neurons);  
    }
}
else{
  numNeurons=pointDataSmall.getRowCount();

  while (Neurons.length<numNeurons){
    angleMode=RADIANS;
    
    const x = map(floor(pointsXSmall[floor(idx)])+random(-10,10),0,1440,0,windowWidth);
    const y = map(floor(pointsYSmall[floor(idx)])+random(-10,10),0,1024,0,windowHeight);


    Neurons.push(new Neuron(x,y));
    idx++;
  }
  for (let i=0;i<numNeurons;i++){
    Neurons[i].getConnections(Neurons);  
  }
}



}

function keyPressed(){
  if (key === "r") {
    reset();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  reset();
  if (windowWidth>MobileThreshold){
    DRAWPROB=0.2;
    DELAY=2;
    THRESHDISTANCE  = windowWidth*0.045;

  }
  else{
    DRAWPROB=0.8;
    DELAY=4;
    THRESHDISTANCE  = windowWidth*0.08;

  }
}
//needs to add button function and title function
//that scales to the size adapting
//needs testing on table and mobile   
