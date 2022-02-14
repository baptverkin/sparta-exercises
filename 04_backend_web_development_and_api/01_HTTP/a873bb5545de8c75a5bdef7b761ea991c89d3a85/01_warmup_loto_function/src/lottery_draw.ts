type Draw = number[]

export function lottery_draw(): Draw {
  const arr = [];
  const num1 = Math.floor(Math.random() * (101))
  const num2 = Math.floor(Math.random() * (101))
  const num3 = Math.floor(Math.random() * (101))
  const num4 = Math.floor(Math.random() * (101))
  const num5 = Math.floor(Math.random() * (101))
  const num6 = Math.floor(Math.random() * (101))
  arr.push(num1, num2, num3, num4, num5, num6);
  return arr;
}

