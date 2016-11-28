var myObj = {
  Car  : function (name, model, type) {
  this.type = type;
  this.model = model;
  this.name = name;
  this.numOfDoors = 4;
  this.numOfWheels = 4;
  this.isSaloon;
  this.speed;
  
  if(this.name === undefined && this.model === undefined){
    this.name = "General";
    this.model ="GM";
  }

  if(name === "Porshe" || name === "Koenigsegg"){
    this.numOfDoors = 2;
  }

  if(type === "trailer"){
    this.numOfWheels = 8;
    this.speed = "0 km/h";
  }

  if (this.numOfWheels === 4){
    this.isSaloon = true;
  } else {
    this.isSaloon = false;
  }

  this.drive = function(num){
            if(this.type === 'trailer'){
                this.speed = "77 km/h";
            }
            if(this.name === "Porshe"){
                this.speed = "250 km/h";
            }
            return this; 
        }

}
}
module.exports = myObj;
