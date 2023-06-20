import HambugerMenu from "./HamburgerMenu";
import Image from "next/image";
import crown from "src/images/crown.svg";

function NavBar(props) {
  return (
    <div className="space-between nav-bar sticky top-0 z-50 flex justify-between border-none bg-black px-4 p-2 pt-3 text-xl font-extrabold text-neutral-300 shadow-md">
      <div className="flex gap-2 items-center">
        <Image src={crown} alt="StatCrown Logo" width={25} height={25} />
        <p>StatCrown</p>
      </div>
      <HambugerMenu />
    </div>
  );
}

export default NavBar;
