"use client";

import { usePathname } from "next/navigation";

const Weeks = () => {
  const path = usePathname();
  const title = path.slice(path.length - 1, path.length) + "주차";
  return (
    <main className="p-2">
      <h1>{title}</h1>
    </main>
  );
};

export default Weeks;
