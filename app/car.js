var myObj = {
  Car  : function (name, model, type) {
  this.type = type;
  this.model = model;
  this.name = name;
  this.numOfDoors = 4;
  this.numOfWheels = 4;
  
  if(name === undefined || model === undefined){
    this.name = "General";
    this.model ="GM";
  }

  if(this.name === "Porshe" || this.name === "Koenigsegg"){
    this.numOfDoors = 2;
  }
}
};
module.exports = myObj;


// it("The car shoud have four (4) doors except its a Porshe or Koenigsegg", function() {
//       var opel  = new Car('Opel', 'Omega 3');
//       expect(opel.numOfDoors).to.equal(4);

//       var porshe = new Car('Porshe', '911 Turbo');
//       expect(porshe.numOfDoors).to.equal(2);
//       porshe.drive(5);
//       expect(porshe.speed).to.equal('250 km/h');
//       expect((function(){return new Car('Koenigsegg', 'Agera R');}()).numOfDoors).toBe(2);
//     });