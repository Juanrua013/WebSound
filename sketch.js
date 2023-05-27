var song ;
var slider ; 
var sliderPan ; 
var button;    
var jumpButton ;  

function setup () {
  createCanvas(500,500) ;

  slider= createSlider(0, 1, 0.5 , 0.01 ); 
  sliderPan= createSlider(-1, 1, 0.5 , 0.01 ); 
  button=createButton("play"); 
  button.mousePressed(togglePlaying);

  jumpButton = createButton("jump");  
  jumpButton.mousePressed(jumpSong);  
  song.setVolume(slider.value()); 

  
}

function draw () {
 // background(0);
  song.addCue(1 , changeBackground,  color(255,0,255)); 
  song.addCue(2 , changeBackground,  color(255,0,255));
  song.addCue(3 , changeBackground,  color(0,255,255));
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

function jumpSong() { 
    var len = song.duration() ;
    var t = random(len);  
    console.log (t);    
    song.jump(t) ; 
    

  }

function preload() {
  soundFormats("mp3")
  song =  loadSound("./beat");
}

function changeBackground (){ 

  background(random (255),  random(255),  random(255) );  

}
  