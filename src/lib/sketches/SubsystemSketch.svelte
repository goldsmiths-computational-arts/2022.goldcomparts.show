<script>

import P5 from 'p5-svelte';
import { onMount } from 'svelte';
let hasMounted = false;
let sketchWidth = 1000;
onMount(async() => {
        let element = document.getElementById('SubsystemSketch');
        sketchWidth = element.offsetWidth;
        hasMounted = true;

    });


  
  
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

  const sketch = (p5) => {

    class Neuron {
    constructor(_x,_y){
      this.pos =new p5.createVector(_x,_y)
      this.origPos=new p5.createVector(_x,_y);
      this.vel = new p5.createVector(0,0);
      this.connectionsPos=[];
      this.connectionsIndex=[];
      this.connectionsFiring=[]
      this.threshold=p5.random(0.1,1);
      this.value=0;
      this.activated=false
      this.cooldown=0;
      this.drawn=false;
      if (p5.random(0,1)>1.0-DRAWPROB){
        this.drawn=true;
      }
      
    }
    
    getConnections(Neurons){
       for (let i=0;i<numNeurons;i++){
         let distance=p5.dist(Neurons[i].pos.x,Neurons[i].pos.y,this.pos.x,this.pos.y);
         if(distance<THRESHDISTANCE && distance>1){
           if (p5.random(0,1)<0.9){
               this.connectionsPos.push(Neurons[i].pos);
               this.connectionsIndex.push(i);
               this.connectionsFiring.push(false);
           }
         }
       }
    }
  
    move(size){
      let multi = 0.8;
      let noiseValue=10* p5.noise(this.pos.x*0.1,this.pos.y*0.1)
      if (size){
        multi=25;
      }
      this.vel.x+= multi * p5.cos( noiseValue);
      this.vel.y+= multi * p5.sin( noiseValue);
      this.vel.x-=0.12*(this.pos.x-this.origPos.x);
      this.vel.y-=0.12*(this.pos.y-this.origPos.y);
  
      let mag=p5.sqrt(this.vel.x*this.vel.x+this.vel.y*this.vel.y);
    
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
      this.value=p5.max(this.value,0);
    }
    
    drawNeurons(){
      p5.strokeWeight(1);
  
      p5.stroke(0,0,0,2);
      p5.fill(255,255,255,255);
      if(this.activated && this.cooldown>4){
        p5.fill(0,p5.random(100,255),p5.random(100,255),50);
      }
      circle(this.pos.x,this.pos.y,10);
    }
  
    drawConnections(){
      for(let i=0;i<this.connectionsIndex.length;i++){
        p5.strokeWeight(1);
        p5.stroke(0,0,0,20);
  
        if (this.connectionsFiring[i]){
          p5.strokeWeight(2);
          p5.stroke(0,p5.random(100,255),p5.random(100,255),80);
          let tempPosX=Neurons[this.connectionsIndex[i]].pos.x;
          let tempPosY=Neurons[this.connectionsIndex[i]].pos.y;
    
          p5.line(this.pos.x,this.pos.y,tempPosX,tempPosY);  
        }
  
        else if (this.drawn){
          let tempPosX=Neurons[this.connectionsIndex[i]].pos.x;
          let tempPosY=Neurons[this.connectionsIndex[i]].pos.y;
    
         p5.line(this.pos.x,this.pos.y,tempPosX,tempPosY);
        }
        
      }
    }
    
  }
    p5.preload = () => {
      pointData=p5.loadTable("/creativeCodingSketch/data/points1.5k.csv",'csv');
      pointDataSmall=p5.loadTable("/creativeCodingSketch/data/pointsmobile.csv",'csv');
      
      img = p5.loadImage('/creativeCodingSketch/data/4.png');
      
      
      buttonFont = p5.loadFont('/creativeCodingSketch/fonts/DotGothic16-Regular.ttf');
      titleFont = p5.loadFont('/creativeCodingSketch/fonts/Neutraface_Slab_Display_Light.otf');
    }
  
  p5.setup = () => {
  
    
    tableHelper();
    p5.createCanvas(1440, 1024);
    
    
    reset();
  
    buttonDictionaryDesktop={
      0:["Machine Learning",p5.width*0.8,p5.height*0.675,"http://www.google.com"],
      1:["Performance",p5.width*0.27,p5.height*0.15,"http://www.google.com"],
      2:["Installation",p5.width*0.9,p5.height*0.18,"http://www.google.com"],
    };
  
    buttonDictionaryMobile={
      0:["Machine Learning",p5.width*0.2,p5.height*0.2,"http://www.google.com"],
      1:["Performance",p5.width*0.2,p5.height*0.3,"http://www.google.com"],
      2:["Installation",p5.width*0.2,p5.height*0.4,"http://www.google.com"],
    };
  }
  
  p5.draw = () => {
    if (p5.frameCount<5){
      p5.background(255);
    }
    
    p5.background(255,255,255,50);
    p5.fill(0);
    
    updateNeurons();
    p5.tint(255,220);
    p5.copy(img, 0, 0, img.width, img.height, 0, 0,p5.windowWidth,p5.windowHeight);
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
   
    
    for(let n of Neurons){
      n.check();
    
      if (p5.frameCount%DELAY==0){
        if (p5.random(0,1)>0.85){
          n.move(false);
        }
        n.fire();
      }
      n.drawConnections();
      n.decay();
    }
  
    if ( p5.frameCount%30==0){
      let random_neuron=p5.int(p5.random(0,Neurons.length));
      Neurons[random_neuron].value=200;
    }
  
  
  }
  function titlesDesktop(){
    p5.strokeWeight(0.5);
    p5.textSize(24);
    p5.stroke(0,0,0,200)
    p5.fill(0);
    textAlign(p5.CORNER, p5.CENTER);
    textFont(buttonFont)
    let h=p5.height*0.6
    text("The Computational Arts MA/MFA Degree Show",120,h);
    h+=48+24
    p5.textSize(60);
    p5.stroke(0)
    p5.fill(0);
    p5.textAlign(p5.CORNER, p5.CENTER);
    p5.textFont(buttonFont)
    p5.text("(SUB)",110,h);
    h+=60+12;
    p5.text("SYSTEMS",120,h);
    h+=60+24;
    p5.textSize(24);
    p5.stroke(0)
    p5.fill(0);
    p5.textAlign(p5.CORNER, p5.CENTER);
    p5.textFont(buttonFont)
    p5.text("1st - 4th September 2022",120,h);
  }
  
  
  function buttonCheck(){
    let valid=true;
    
    for (const [key, value] of Object.entries(buttonDictionaryDesktop)) {
      let x=value[1];
      let y = value[2];
      if (p5.windowWidth<x || p5.windowHeight<y){
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
    p5.textFont(buttonFont)
    p5.stroke("#00FE00")
    p5.fill(255,255,255);
    p5.rectMode(p5.CENTER);
    p5.textSize(32);
    let w=pad_x+p5.textWidth(input);
    let h=pad_y+32;
    p5.rect(x,y,w,h);
    p5.stroke(0)
    p5.fill(0);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.text(input,x,y-7);
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
      if (p5.dist(value[1],value[2],p5.mouseX,p5.mouseY)<60){
        p5.cursor(CROSS);
        hovering=true;
  
      }
    }
  if(!hovering){
    p5.cursor(p5.ARROW);
    }
  }
  
   p5.mousePressed = () => {
    let pulsed=false;
    for( let n of Neurons){
        if (p5.dist(n.pos.x,n.pos.y,p5.mouseX,p5.mouseY)<40){
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
      if (p5.dist(value[1],value[2],p5.mouseX,p5.mouseY)<40){
        window.open(value[3]);
      }
    }
  }
  
  
  
  function reset(){
    p5.background(0);
    THRESHDISTANCE  = p5.windowWidth*0.045;
    Neurons=[];
    let idx=0;
    if (p5.windowWidth>MobileThreshold){
      numNeurons=pointData.getRowCount();
  
      while (Neurons.length<numNeurons){
        p5.angleMode=p5.RADIANS;
        
        const x = p5.map(p5.floor(pointsX[p5.floor(idx)])+p5.random(-10,10),0,1440,0,p5.windowWidth);
        const y = p5.map(p5.floor(pointsY[p5.floor(idx)])+p5.random(-10,10),0,1024,0,p5.windowHeight);
  
  
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
      p5.angleMode=p5.RADIANS;
      
      const x = p5.map(p5.floor(pointsXSmall[p5.floor(idx)])+p5.random(-10,10),0,1440,0,p5.windowWidth);
      const y = p5.map(p5.floor(pointsYSmall[p5.floor(idx)])+p5.random(-10,10),0,1024,0,p5.windowHeight);
  
  
      Neurons.push(new Neuron(x,y));
      idx++;
    }
    for (let i=0;i<numNeurons;i++){
      Neurons[i].getConnections(Neurons);  
    }
  }
  
  
  
  }
  
  p5.keyPressed = () => {
    if (key === "r") {
      reset();
    }
  }
  
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    reset();
    if (p5.windowWidth>MobileThreshold){
      DRAWPROB=0.2;
      DELAY=2;
      THRESHDISTANCE  = p5.windowWidth*0.045;
  
    }
    else{
      DRAWPROB=0.8;
      DELAY=4;
      THRESHDISTANCE  = p5.windowWidth*0.08;
  
    }
  }
  //needs to add button function and title function
  //that scales to the size adapting
  //needs testing on table and mobile   
}
  
  

</script>

<div id="SubsystemSketch" class ="div__SketchWrapper">
    {#if hasMounted}
        <P5 {sketch} />
    {/if}
</div>

<style>
	.div__SketchWrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--white);
        z-index: -1;
    }
</style>
  