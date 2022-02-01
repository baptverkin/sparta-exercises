import { Tree } from "./Tree";

// Code your class here.

class OrangeTree extends Tree {
  oranges: string[] = [];

  constructor (age:number) {
    super(age);
    this.growOranges();
  }

  ageOneYear (): void {
    this.age += 1;

    if (this.age <= 9) {
      this.height += 25;
      this.growOranges();
    } else if (this.age >= 10 && this.age <= 20) {
      this.height += 10;
      this.growOranges();
    }else if (this.age >20){
      this.growOranges();
    }
    this.alive = this.isAlive();
    this.growOranges();
  }

  growOranges(): void {
    const orangeEmoji: string = "🍊";
    this.oranges.splice(0,this.oranges.length);

    if (this.age>=0 && this.age <=4){
       this.oranges;
    } else if (this.age>=5 && this.age <=10 ){
      for (let i:number = 1; i<=10; i++){
        this.oranges.push(orangeEmoji)
      }
    } else if (this.age >=11 && this.age <=20 ){
      for (let i:number = 1; i<=20; i++){
        this.oranges.push(orangeEmoji)
      }
    } else if (this.age>=21 && this.age <=40 ){
      for (let i:number = 1; i<=5; i++){
        this.oranges.push(orangeEmoji.repeat(5))
      }
    } else {
      this.oranges
    }
  }

    pickAnOrange(): string[] {
      if (this.oranges !== []){
      return this.oranges.splice(0,1);
      }else{
        return [];
      }
    }

    isAlive(): boolean {
      const randomBoolean: boolean = Math.random() < (1-(this.age/100));
      if (this.age >=0 && this.age <=50){
        return true;
      }else if (this.age >50 && this.age <= 99){
        return randomBoolean;
      }else {
        return false;
      }
  }
}




// Leave the line below for tests to work properly.
export { OrangeTree };

