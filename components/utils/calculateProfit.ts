import Lotto from "./Lotto";

type calculateProfitProps = {
  lottos: Lotto[];
  winningLotto: Lotto;
  bonusNumber: number;
};

type results = {
  [key: string]: number;
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
};

type PRIZE_MONEY = {
    [key: string]: number;
    first: number;
    second: number;
    third: number;
    fourth: number;
    fifth: number;
  };

export const calculateProfit = ({
  lottos,
  winningLotto,
  bonusNumber,
}: calculateProfitProps) => {
  const PRIZE_MONEY: PRIZE_MONEY = {
    first: 2000000000,
    second: 30000000,
    third: 1500000,
    fourth: 50000,
    fifth: 5000,
  };

  const results: results = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

  lottos.forEach((lotto) => {
    const lottoNumbers = lotto.getNumbers();
    const matchCount = lottoNumbers.filter((number) =>
      winningLotto.getNumbers().includes(number)
    ).length;
    const hasBonusNumber = lottoNumbers.includes(bonusNumber);

    switch (matchCount) {
      case 6:
        results.first += 1;
        break;
      case 5:
        results[hasBonusNumber ? "second" : "third"] += 1;
        break;
      case 4:
        results.fourth += 1;
        break;
      case 3:
        results.fifth += 1;
        break;
    }
  });

  let totalPrize: number = 0;
  for (const rank in results) {
    totalPrize += results[rank] * PRIZE_MONEY[rank];
  }

  return totalPrize;
};
