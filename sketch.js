var song ;
var slider ;   

function preload() {
  soundFormats("mp3")
  song =  loadSound("./beat");
}

function setup () {
  createCanvas(300,300) ;
  slider= createSlider(0, 1, 0.5 , 0.01 ); 
   
  song.play();
  song.setVolume(slider.value()); 
  song.loop();
}

function draw () {
  background(0);
  circle(100, 100);
  song.setVolume(slider.value());  
}
