module.exports = {
  Car  : function (type, model, name) {
  this.type = type;
  
  if (model !== undefined){
    this.model = model;
  } else {
    this.model = "GM";
  }
  
  if(name !== undefined){
    this.name = name;
  }
  else{
   this.name = "General";
  }

  // this.info = function () {
  //   return "The type of this car is " + this.type + " and it's model is " + this.model + " and name is " + this.name;
  // };
}
}