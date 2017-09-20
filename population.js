//Create a population object which is just an array

function Population() {
  this.cars = [];
  this.popsize = 40;
  this.matingpool = [];
  this.averageFitness = 0;

  for (var i = 0; i < this.popsize; i++) {
    this.cars[i] = new Car();
  }

  this.evaluate = function() {
    var totalFitness = 0;
    var maxfit = 0;
    for (var i = 0; i < this.popsize; i++) {
      this.cars[i].calcFitness();
      if (this.cars[i].fitness > maxfit) {
        maxfit = this.cars[i].fitness;
      }
    }

    for (var i = 0; i < this.popsize; i++) {
      this.cars[i].fitness /= maxfit;
    }

    this.matingpool = [];
    for (var i = 0; i < this.popsize; i++) {
      var n = this.cars[i].fitness * 100;
      for (var j = 0; j < n; j++) {
        this.matingpool.push(this.cars[i]);
      }
    }
  }

  this.selection = function() {
    var newCars = [];
    for (var i = 0; i < this.cars.length; i++) {
      var parentA = random(this.matingpool).dna;
      var parentB = random(this.matingpool).dna;
      var child = parentA.crossover(parentB);
      newCars[i] = new Car(child);
    
    }
    this.cars = newCars;
  }
  this.calcAvgFitness = function(){
      var sumOfFitness = 0;
      for(var i = 0; i < this.popsize; i++){
          this.cars[i].calcFitness();
          sumOfFitness += this.cars[i].fitness;
      }
      this.averageFitness = sumOfFitness/this.popsize;
  }
  this.run = function() {
    for (var i = 0; i < this.popsize; i++) {
      this.cars[i].update();
      this.cars[i].show();
    }
  }

  
}