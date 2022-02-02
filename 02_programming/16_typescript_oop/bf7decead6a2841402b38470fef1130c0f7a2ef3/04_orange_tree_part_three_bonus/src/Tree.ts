// Paste your previous `Tree` class here.
abstract class Tree {
  protected _age: number;
  protected _height: number;
  protected _alive: boolean = true;

  constructor (age: number){
    this._age = age;
    if (age===0){
      this._height = 0;
    }else if (age >= 1 && age <= 9){
      this._height = (age*25);
    }else if (age>=10 && age <= 20){
      this._height = (225+(age-9)*10);
    }else if (age > 20){
      this._height = 335;
    }else{
       "Not a valid age";
    }
  }

  protected abstract _isAlive(): boolean;
  protected abstract ageOneYear(): void;


  seed (age: number, height: number, alive: boolean): void  {
    this._age = 0;
    this._height = 0;
    this._alive = true;
  }
}
// Leave the line below for tests to work properly.
export { Tree };
