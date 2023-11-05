import React, { FC } from "react";

type WeekThreeProps = {
  title: string;
};

const WeekThree: FC<WeekThreeProps> = ({ title }) => {
  return (
    <main className="mainContainer p-2">
      <div className="headContainer m-2">
        <h1>{title}</h1>
        <h1>로또</h1>
      </div>
      <div className="contentContainer flex w-full h-full border border-black border-solid p-2 justify-between"></div>
    </main>
  );
};

export default WeekThree;
