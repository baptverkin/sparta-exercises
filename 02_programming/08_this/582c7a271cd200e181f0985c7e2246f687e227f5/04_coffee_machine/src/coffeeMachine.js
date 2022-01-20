const machine = {

  litersOfCoffee: 0,
  expressoSize: 0.08,
  longCoffeeSize: 0.15,

  fillWithLitersOfCoffee: function(recharge){
    this.litersOfCoffee = this.litersOfCoffee + recharge;
    return this;
  },
  expresso: function (){
    if (this.litersOfCoffee >= this.expressoSize){
      this.litersOfCoffee = this.litersOfCoffee - this.expressoSize;
      return true;
    }else{
      return false;
    };
  },
  longCoffee: function (){
    if (this.litersOfCoffee >= this.longCoffeeSize){
      console.log(this.litersOfCoffee >= this.longCoffeeSize);
      this.litersOfCoffee = this.litersOfCoffee - this.longCoffeeSize;
      return true;
    }else{
      return false;
    }
  },
};

module.exports = machine;
