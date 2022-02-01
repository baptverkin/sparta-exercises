// Code the class here.

class Tree {
  age: number;
  height: number;
  alive: boolean = true;

  constructor (age: number){
    this.age = age;
    if (age===0){
      this.height = 0;
    }else if (age >= 1 && age <= 9){
      this.height = (age*25);
    }else if (age>=10 && age <= 20){
      this.height = (225+(age-9)*10);
    }else if (age > 20){
      this.height = 335;
    }else{
       "Not a valid age";
    }
  }


  seed (age: number, height: number, alive: boolean): void  {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}


// Leave the line below for tests to work properly.
export { Tree };
