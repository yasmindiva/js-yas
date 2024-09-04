function setup() {
    createCanvas(600, 600);
    background("pink");
  } 
  
  function draw() {
  
     stroke("lightgreen") //borda
    fill("lightgreen")
    //console.log(mouseIsPressed)
    
    if (mouseIsPressed){
      circle(mouseX,mouseY,30);
    }
  }