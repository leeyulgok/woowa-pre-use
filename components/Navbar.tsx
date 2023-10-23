import Link from "next/link";

const Navbar = () => {
  const navList = [
    { title: "Home", href: "/" },
    { title: "1주차", href: "/week1" },
    { title: "2주차", href: "/week2" },
    { title: "3주차", href: "/week3" },
    { title: "4주차", href: "/week4" },
  ];
  return (
    <nav className="bg-black text-white mb-2">
      <div>
        <ul className="flex">
          {navList.map((list, i) => (
            <li key={i} className="m-2">
              <Link href={list.href}>{list.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
