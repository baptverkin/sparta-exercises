import { Tree } from "./Tree";

// Paste your previous `OrangeTree` class here.

class OrangeTree extends Tree {
  protected _oranges: string[] = [];

  constructor (age:number) {
    super(age);
    this._isAlive();
    this.ageOneYear();
    this.growOranges();
  }

  get oranges(): string[]{
    return this._oranges;
  }
  get age(): number{
    return this._age;
  }
  get height(): number{
    return this._height;
  }
  get alive(): boolean{
    return this._alive;
  }

  growOranges(): void {
    const orangeEmoji: string = "🍊";
    this._oranges.splice(0,this._oranges.length);

    if (this._age>=0 && this._age <=4){
       this._oranges;
    } else if (this._age>=5 && this._age <=10 ){
      for (let i:number = 1; i<=10; i++){
        this._oranges.push(orangeEmoji)
      }
    } else if (this._age >=11 && this._age <=20 ){
      for (let i:number = 1; i<=20; i++){
        this._oranges.push(orangeEmoji)
      }
    } else if (this._age>=21 && this._age <=40 ){
      for (let i:number = 1; i<=5; i++){
        this._oranges.push(orangeEmoji.repeat(5))
      }
    } else {
      this._oranges
    }

  }

  protected _isAlive(): boolean {
    const randomBoolean: boolean = Math.random() < (1-(this._age/100));
    if (this._age >=0 && this._age <=50){
      return true;
    }else if (this._age >50 && this._age <= 99){
      return randomBoolean;
    }else {
      return false;
    }
}


  ageOneYear (): void {
    this._age += 1;

    if (this._age <= 9) {
      this._height += 25;
      this.growOranges();
    } else if (this._age >= 10 && this._age <= 20) {
      this._height += 10;
      this.growOranges();
    }else if (this._age >20){
      this.growOranges();
    }
    this._alive = this._isAlive();
    this.growOranges();
  }

    pickAnOrange(): string[] {
      if (this._oranges !== []){
      return this._oranges.splice(0,1);
      }else{
        return [];
      }
    }

}



// Leave the line below for tests to work properly.
export { OrangeTree };
