import React, { FC, useState } from "react";
import Lotto from "../utils/Lotto";

type WeekThreeProps = {
  title: string;
};

const WeekThree: FC<WeekThreeProps> = ({ title }) => {
  const [isGamemode, setIsGamemode] = useState<boolean>(false);
  const [showStartButton, setShowStartButton] = useState<boolean>(false);
  const [lottoNumbers, setLottoNumbers] = useState<string[]>([]);
  const [lotto, setLotto] = useState<Lotto[]>([]);

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
    setLotto(newLotto);
    setShowStartButton(true);
  };

  const startRaffle = () => {
    return "hihi";
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
          <div className="lottoContainer">
            <div className="resultContainer">
              <div className="listContainer"></div>
              <div className="numbersContainer"></div>
              <div className="winningContainer">
                <div className="winningNumbersBox"></div>
                <div className="bonusNumberBox"></div>
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
