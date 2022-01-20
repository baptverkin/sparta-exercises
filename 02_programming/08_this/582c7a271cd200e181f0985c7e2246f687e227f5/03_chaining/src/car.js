// Complete and add needed car properties:
const car = {
  speed: 0,
  initialDrive: 0,
  distance: 0,
  start: function () {
    this.distance = 0;
    return this;
  },
  changeSpeed: function (newSpeed) {
    this.speed = newSpeed;
    return this;
  },
  drive: function (minutesDriving) {
    if (this.distance === 0){
      this.initialDrive = minutesDriving;
      this.distance = this.speed*(this.initialDrive/60);
      console.log(this.distance);
    }else{
      this.initialDrive = minutesDriving;
      this.distance = this.distance + (this.speed*(this.initialDrive/60));
      console.log(this.distance);
    };
    return this;
  },
  // updateDistance: function (){
  //   this.distance = this.distance + (this.speed*this.initialDrive/60);
  //   return this;
  // },
  showDistance: function () {
    console.log(`${this.distance} Km`);
    return this;
  },
};
car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).changeSpeed(90).drive(80).showDistance();

module.exports = car;
