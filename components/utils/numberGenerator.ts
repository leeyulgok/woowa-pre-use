export const generateRandomNumbers = (): number[] => {
  const numbers: number[] = [];
  while (numbers.length < 3) {
    const num = Math.floor(Math.random() * 9) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
};
