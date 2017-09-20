var population;
var lifespan = 400;
var lifeP;
var count = 0;
var target;
var maxforce = 0.2;
var generation = 0;
var gen;
var avgFitness;

var rx = 10;
var ry = 15;
var rw = 20;
var rh = 1;

function setup() {
  createCanvas(400, 300);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);
  gen = createP();
  //avgFitness = createP();

}

function draw() {
  background(255);
  population.run();
  lifeP.html("Frames: "+ count);
  gen.html("Generation: "+generation);
  //avgFitness.html("AvgFitness" + population.averageFitness());
  count++;
  
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    population.calcAvgFitness();
    //population.averageFitness();
    //population = new Population();
    count = 0;
    generation++;
    console.log(population.averageFitness);
  
  }

  
  

  fill(240);
  ellipse(target.x, target.y, 16, 16);
  
}