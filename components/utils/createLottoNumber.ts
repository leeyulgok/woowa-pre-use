export const createLottoNumber = () => {
  let numbers: number[] = [];

  while(numbers.length !== 6) {
    const number: number = Math.floor(Math.random() * (45 - 1 + 1)) + 1;
    if(numbers.includes(number)) continue;
    numbers.push(number);
  }

  return numbers.sort((a, b) => a - b);
}