var song ;
var slider ; 
var sliderPan ; 
var button;    
var jumpButton ;  

function preload() {
  soundFormats("mp3")
  song =  loadSound("./beat");
}

function setup () {
  createCanvas(500,500) ;

  slider= createSlider(0, 1, 0.5 , 0.01 ); 
  sliderPan= createSlider(-1, 1, 0.5 , 0.01 ); 
  button=createButton("play"); 
  button.mousePressed(togglePlaying);

  jumpButton = createButton("jump");  
  jumpButton.mousePressed(jumpSong);  
  //song.play();
  song.setVolume(slider.value()); 
  //song.loop();
}

function draw () {
  background(random(0 ,255));
  ellipse(56, 46, 55, 55);
  
  song.setVolume(slider.value());  
  song.pan(sliderPan.value());    
}

function togglePlaying(){ 
  if (!song.isPlaying()){
     song.play();
     button.html("pause");  

  }else  {
    song.pause(); 
    button.html("play");  
  }
 

}
  