"use client";

import { usePathname } from "next/navigation";
import WeekOne from "@/components/[weeks]/WeekOne";

const Weeks = () => {
  const path = usePathname();
  const title = path.slice(path.length - 1, path.length) + "주차";

  if(title === "1주차") {
    return <WeekOne title={title} />
  }
  
  return (
    <main className="p-2">
      <h1>{title}</h1>
    </main>
  );
};

export default Weeks;
