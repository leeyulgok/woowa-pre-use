import React, { FC, useState } from "react";
import Lotto from "../utils/Lotto";
import { createLottoNumber } from "../utils/createLottoNumber";
import { createBonusNumber } from "../utils/createBonusNumber";
import { calculateProfit } from "../utils/calculateProfit";

type WeekThreeProps = {
  title: string;
};

const WeekThree: FC<WeekThreeProps> = ({ title }) => {
  const [isGamemode, setIsGamemode] = useState<boolean>(false);
  const [showStartButton, setShowStartButton] = useState<boolean>(false);
  const [lottoNumbers, setLottoNumbers] = useState<string[]>([]);
  const [lottos, setLottos] = useState<Lotto[]>([]);
  const [winningLotto, setWinningLotto] = useState<Lotto>();
  const [bonusNumber, setBonusNumber] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);

  const startGame = () => {
    setIsGamemode(true);
  };

  const handleAddInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (lottoNumbers.length < 5) {
      setLottoNumbers([...lottoNumbers, ""]);
    }
  };

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newLotto = lottoNumbers
      .map((numbers) => numbers.trim().split(","))
      .filter((nums) => nums.every((num) => num !== ""))
      .map((nums) => nums.map(Number))
      .map((numArray) => new Lotto(numArray));
    setLottos(newLotto);
    setShowStartButton(true);
  };

  const startRaffle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const winningNumber = createLottoNumber();
    const winningLotto = new Lotto(winningNumber);
    setWinningLotto(winningLotto);
    setBonusNumber(createBonusNumber(winningLotto));
    setProfit(calculateProfit({lottos, winningLotto, bonusNumber}));
  };

  return (
    <main className="mainContainer p-2">
      <div className="headContainer m-2">
        <h1>{title}</h1>
        <h1>로또</h1>
      </div>
      <div className="contentContainer flex w-full h-full border border-black border-solid p-2 justify-between">
        {!isGamemode ? (
          <div className="gameStartContainer">
            <button
              className="border border-black bg-white p-4"
              onClick={startGame}
            >
              게임시작
            </button>
          </div>
        ) : (
          <div className="lottoContainer flex flex-col md:flex-row w-full">
            <div className="resultContainer flex-grow p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="userLottoContainer flex mb-4">
                <div className="listContainer p-2 bg-white rounded-lg shadow-inner">
                  <h1>로또 리스트</h1>
                  <div className="lottoList">
                    <ul className="lottos">
                      {lottos.map((lotto, index) => (
                        <li key={index}><h3>{index + 1}</h3></li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="numbersContainer mt-2 p-2 bg-white rounded-lg shadow-inner">
                  <h1>로또 번호</h1>
                  <div className="numberList">
                    <ul className="numbers">
                      {lottos.map((lotto, index) => (
                        <li key={index} className="flex">
                          <div className="number border border-black m-2"><h3>{lotto.getNumbers()[0]}</h3></div>
                          <div className="number border border-black m-2"><h3>{lotto.getNumbers()[1]}</h3></div>
                          <div className="number border border-black m-2"><h3>{lotto.getNumbers()[2]}</h3></div>
                          <div className="number border border-black m-2"><h3>{lotto.getNumbers()[3]}</h3></div>
                          <div className="number border border-black m-2"><h3>{lotto.getNumbers()[4]}</h3></div>
                          <div className="number border border-black m-2"><h3>{lotto.getNumbers()[5]}</h3></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="winningContainer mt-4 p-2 bg-green-200 rounded-lg shadow flex">
                <div className="winningNumbersBox p-2 bg-white rounded-lg shadow-inner">
                  <h1>추첨된 번호</h1>
                  <div className="winningNumberList">
                    <ul className="winningNumbers">
                    { winningLotto ? (
                      <div className="flex">
                        {winningLotto.getNumbers().map((number, index) => (
                          <li key={index} className="flex">
                            <div className="number flex border border-black m-2">{number}</div>
                          </li>
                        ))}
                      </div>
                    ) : (
                      <div></div>
                    )}
                    </ul>
                  </div>
                </div>
                <div className="bonusNumberBox mt-2 p-2 bg-white rounded-lg shadow-inner">
                  <h1>보너스 번호</h1>
                  <div className="bonusNumberTitle">
                    <p className="bonusNumber">
                      {bonusNumber}
                    </p>
                  </div>
                </div>
              </div>
              <div className="profitContainer mt-4 p-2 bg-yellow-200 rounded-lg shadow flex">
                <div className="profitTitle p-2 bg-white rounded-lg shadow-inner">
                  <h1>당첨 금액</h1>
                </div>
                <div className="profit mt-2 p-2 bg-white rounded-lg shadow-inner text-lg font-bold">
                  <p className="profitMoney">{profit}</p>
                </div>
              </div>
            </div>
            <div className="inputConatiner border border-black justify-center items-center text-center w-40">
              {!showStartButton ? (
                <div className="lottoListFormContainer">
                  <form className="flex flex-col m-2">
                    <label htmlFor="inputTitle">로또 번호 입력</label>
                    {lottoNumbers.map((input, index) => (
                      <input
                        key={index}
                        type="text"
                        value={input}
                        onChange={(event) => {
                          const newInputs = [...lottoNumbers];
                          newInputs[index] = event.target.value;
                          setLottoNumbers(newInputs);
                        }}
                        className="border border-black m-1"
                      />
                    ))}
                    <div className="buttonContainer flex justify-end m-2">
                      <button
                        className="m-1"
                        onClick={handleAddInput}
                        disabled={lottoNumbers.length >= 5}
                      >
                        +
                      </button>
                      <button className="m-1" onClick={handleConfirm}>
                        확정
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="playGameFormContainer">
                  <form className="flex flex-col m-2">
                    <button className="m-1" onClick={startRaffle}>
                      추첨시작
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default WeekThree;
