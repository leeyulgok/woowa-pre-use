import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
import "react-calendar/dist/Calendar.css";

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
  const [isReservation, setIsReservation] = useState<boolean>(false);

  const tileDisabled = ({ date, view }: tileDisabledProps) => {
    if (isReservation) return true;

    if (view === "month" && (date.getFullYear() !== 2023 || date.getMonth() !== 11)) {
      return true;
    }
    return false;
  };

  const checkReservation = () => {
    setIsReservation(true);
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
          <button
            className="calendarButton border border-black w-full"
            onClick={checkReservation}
            disabled={isReservation}
          >
            확정
          </button>
        </div>
        {isReservation ? (
          <div className="menuContainer items-center justify-center border border-black w-full h-full m-1">
            <div className="menuHeader">
              <h1>메뉴판</h1>
            </div>
            <div className="menuListBox flex">
              <div className="appetizers border border-black w-full h-full m-1"></div>
              <div className="mains border border-black w-full h-full m-1"></div>
              <div className="desserts border border-black w-full h-full m-1"></div>
              <div className="drinks border border-black w-full h-full m-1"></div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div className="resultContainer"></div>
      </div>
    </main>
  );
};

export default WeekFour;
