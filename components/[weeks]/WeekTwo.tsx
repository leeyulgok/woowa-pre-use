import { FC, useState } from "react";
import React from "react";

type WeekTwoProps = {
  title: string;
};

const WeekTwo: FC<WeekTwoProps> = ({ title }) => {
  const [isGamemode, setIsGamemode] = useState(false);
  const [participantInput, setParticipantInput] = useState<string[]>([""]);

  const startGame = () => {
    setIsGamemode(true);
  };

  const handleAddInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (participantInput.length < 5) {
      setParticipantInput([...participantInput, ""]);
    }
  };

  return (
    <main className="mainContainer p-2">
      <div className="headContainer m-2">
        <h1>{title}</h1>
        <h1>자동차 경주 게임</h1>
      </div>
      <div className="contentContainer flex w-full h-full border border-black border-solid p-2 justify-between">
        {!isGamemode ? (
          <button
            className="border border-black bg-white p-4"
            onClick={startGame}
          >
            게임시작
          </button>
        ) : (
          <>
            <div className="gameContainer border border-black w-full m-2 flex">
              <div className="userContainer border border-black m-1 p-1">
                <h2>참가자 목록</h2>
                <div className="userList">
                  <h3>user1</h3>
                </div>
              </div>
              <div className="carContainer m-1 p-1">
                <h2>경주상황</h2>
                <div className="carPosition">
                  <h3>-</h3>
                </div>
              </div>
            </div>
            <div className="inputContainer border border-black justify-center items-center text-center">
              <div className="userListFormContainer">
                <form className="flex flex-col m-2">
                  <label htmlFor="inputTitle">참가할 인원목록</label>
                  {participantInput.map((input, index) => (
                    <input
                      key={index}
                      type="text"
                      value={input}
                      onChange={(event) => {
                        const newInputs = [...participantInput];
                        newInputs[index] = event.target.value;
                        setParticipantInput(newInputs);
                      }}
                      className="border border-black m-1"
                    />
                  ))}
                  <div className="buttonContainer flex justify-end m-2">
                    <button
                      className="m-1"
                      onClick={handleAddInput}
                      disabled={participantInput.length >= 5}
                    >
                      +
                    </button>
                    <button className="m-1">확정</button>
                  </div>
                </form>
              </div>
              <div className="playGameFormContainer">
                <form className="flex flex-col m-2">
                  <button className="m-1">경주시작</button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default WeekTwo;
