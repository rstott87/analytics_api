import HambugerMenu from "./HamburgerMenu";
import Image from "next/image";
import crown from "src/images/crown.svg";

function NavBar(props) {
  return (
    <header className="space-between nav-bar sticky top-0 z-50 flex justify-between  border-none bg-black p-5 tracking-wider text-2xl font-extrabold text-neutral-200">
      <section className="flex items-center gap-2">
        <Image src={crown} alt="StatCrown Main Logo" width={30} height={30} />
        <h1>StatCrown</h1>
      </section>
      <HambugerMenu />
    </header>
  );
}

export default NavBar;
