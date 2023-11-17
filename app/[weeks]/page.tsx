"use client";

import { usePathname } from "next/navigation";
import WeekOne from "@/components/[weeks]/WeekOne";
import WeekTwo from "@/components/[weeks]/WeekTwo";
import WeekThree from "@/components/[weeks]/WeekThree";
import WeekFour from "@/components/[weeks]/WeekFour";

const Weeks = () => {
  const path = usePathname();
  const title = path.slice(path.length - 1, path.length) + "주차";
  
  switch (title) {
    case "1주차":
      return <WeekOne title={title} />
    case "2주차":
      return <WeekTwo title={title} />
    case "3주차":
      return <WeekThree title={title} />
    case "4주차":
      return <WeekFour title={title} />
    default:
      <div>{title}</div>
      break;
  }
  
  return (
    <main className="p-2">
      <h1>{title}</h1>
    </main>
  );
};

export default Weeks;
