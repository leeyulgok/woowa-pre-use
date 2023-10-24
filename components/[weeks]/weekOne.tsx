import { FC } from "react";

type WeekOneProps = {
  title: string,
}

const WeekOne: FC<WeekOneProps> = ({title}) => {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  )    
}

export default WeekOne;