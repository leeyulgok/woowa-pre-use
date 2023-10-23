import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <Link href="#">홈</Link>
          <Link href="#">1주차</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
