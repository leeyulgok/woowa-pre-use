import { FC } from "react";

type WeekTwoProps = {
  title: string;
};

const WeekTwo: FC<WeekTwoProps> = ({ title }) => {
  return (
    <main className="mainContainer p-2">
      <div className="headContainer m-2">
        <h1>{title}</h1>
        <h1>자동차 경주 게임</h1>
      </div>
      <div className="contentContainer flex w-full h-full border border-black border-solid p-2 justify-between">
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
          <form className="flex flex-col m-2">
            <label htmlFor="inputTitle">참가할 인원목록</label>
            <input className="border border-black rounded-lg" type="text" name="userName" />
            <div className="buttonContainer flex justify-end m-2">
              <button className="m-1">+</button>
              <button className="m-1">확정</button>
            </div>
          </form>
          <form className="flex flex-col m-2">
            <label htmlFor="inputPlaytimes">진행횟수</label>
            <input type="number" name="playTimes" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default WeekTwo;
