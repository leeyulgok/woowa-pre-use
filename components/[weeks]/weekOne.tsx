import React, { FC, useState } from "react";
import { generateRandomNumbers } from "../utils/numberGenerator";
import { compareNumbers } from "../utils/compareNumbers";

type WeekOneProps = {
  title: string;
};

const WeekOne: FC<WeekOneProps> = ({ title }) => {
  const [isGameStarted, setGameStarted] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [result, setResult] = useState<{ strike: number; ball: number }>({
    strike: 0,
    ball: 0,
  });

  const startGame = () => {
    const newNumbers = generateRandomNumbers();
    setRandomNumbers(newNumbers);
    setGameStarted(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const comparisonResult = compareNumbers(randomNumbers, userInput);
    setResult(comparisonResult);
    setUserInput("");
  };

  const getColor = (index: number) => {
    if (result.strike > index) return "bg-yellow-500";
    if (result.strike + result.ball > index) return "bg-green-500";
    if (result.strike === 0 && result.ball === 0) return "bg-red-500";
    return "bg-white";
  };

  return (
    <main className="WeekOneContainer p-3 w-full h-full">
      <div className="headerContainer">
        <h1>{title}</h1>
        <h2>숫자 야구 게임</h2>
      </div>
      <section className="contentContainer w-full h-full">
        <div className="baseballBox bg-gray-500 flex border border-black w-full h-1/2 justify-center items-center">
          {!isGameStarted ? (
            <button
              className="border border-black bg-white p-4"
              onClick={startGame}
            >
              게임시작
            </button>
          ) : (
            <>
              <div className="answerBox bg-white w-10/12 flex p-2 justify-center items-center">
                <div
                  className={`answerOne border border-black rounded-full w-52 h-52 m-4 ${getColor(
                    0
                  )}`}
                />
                <div
                  className={`answerOne border border-black rounded-full w-52 h-52 m-4 ${getColor(
                    1
                  )}`}
                />
                <div
                  className={`answerOne border border-black rounded-full w-52 h-52 m-4 ${getColor(
                    2
                  )}`}
                />
              </div>
              <div className="inputBox w-2/6 p-2">
                <h3>숫자를 입력해주세요</h3>
                <form
                  action=""
                  className="flex flex-col"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    name="userNumber"
                    id="userNumber"
                    value={userInput}
                    onChange={handleInputChange}
                  />
                  <button className="border border-black bg-white">확인</button>
                </form>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default WeekOne;
