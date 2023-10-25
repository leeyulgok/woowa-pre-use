type ComparisonResult = {
  strike: number;
  ball: number;
};

export const compareNumbers = (
  randomNumbers: number[],
  userInput: string
): ComparisonResult => {
  const inputNumbers = userInput.split("").map((num) => parseInt(num, 10));

  let strike = 0;
  let ball = 0;

  inputNumbers.forEach((num, idx) => {
    if (num === randomNumbers[idx]) {
      strike++;
    } else if (randomNumbers.includes(num)) {
      ball++;
    }
  });

  return { strike, ball };
};
