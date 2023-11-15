import { FC } from "react";

type WeekFourProps = {
  title: string;
};

const WeekFour: FC<WeekFourProps> = ({title}) => {
  return (
    <main className="mainContainer p-2">
      <div>
        <h1>{title}</h1>
      </div>
    </main>
  )
};

export default WeekFour;