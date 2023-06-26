import HambugerMenu from "./HamburgerMenu";
import Link from "next/link";
import Image from "next/image";
import crown from "src/images/crown.svg";

function NavBar(props) {
  return (
    <header className="space-between nav-bar sticky top-0 z-50 flex justify-between  border-none bg-black p-5 text-2xl font-extrabold tracking-wider text-neutral-200">
      <section className="flex items-center gap-2">
        <Image src={crown} alt="StatCrown Main Logo" width={30} height={30} />
        <Link href="/">
          <h1>StatCrown</h1>
        </Link>
      </section>
      <HambugerMenu />
    </header>
  );
}

export default NavBar;
