import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
import 'react-calendar/dist/Calendar.css';

type WeekFourProps = {
  title: string;
};

type tileDisabledProps = {
  date: Date;
  view: string;
};

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

const WeekFour: FC<WeekFourProps> = ({ title }) => {
  const [value, setValue] = useState<Date>(new Date(2023, 11, 1));
  
  const tileDisabled = ({ date, view }: tileDisabledProps) => {
    if (view === 'month' && (date.getFullYear() !== 2023 || date.getMonth() !== 11)) {
      return true;
    }
    return false;
  };

  return (
    <main className="mainContainer p-2">
      <div className="headContainer">
        <h1>{title} - 크리스마스 프로모션</h1>
      </div>
      <div className="mainContentsContainer w-full h-full border border-black flex p-1">
        <div className="calendarContainer border border-black m-1">
          <Calendar
            onClickDay={setValue}
            value={value}
            tileDisabled={tileDisabled}
          />
          <button className="calendarButton border border-black cursor-pointer w-full">확정</button>
        </div>
        <div className="menuContainer"></div>
        <div className="resultContainer"></div>
      </div>
    </main>
  );
};

export default WeekFour;
