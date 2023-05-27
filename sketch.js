var song ;
var slider ; 
var sliderPan ; 
var button;    
var jumpButton ;
var amp;    

function setup () {
  createCanvas(500,500) ;

  slider= createSlider(0, 1, 0.5 , 0.01 ); 
  sliderPan= createSlider(-1, 1, 0.5 , 0.01 ); 
 
  song.setVolume(slider.value()); 
  amp = new p5.Amplitude();  
  
}

function draw () {
  background(51);


  var vol = amp.getLevel();   
  var diam = map( vol, 0 , 0.3 , 10 , 200); 

  fill (255); 
  stroke(100, 100, 100); 
  ellipse(width/2, height/2 ,diam, diam);
  
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
  button=createButton("play"); 
  button.mousePressed(togglePlaying);

  jumpButton = createButton("jump");  
  jumpButton.mousePressed(jumpSong); 
}


  