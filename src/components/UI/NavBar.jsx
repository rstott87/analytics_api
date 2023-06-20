import HambugerMenu from "./HamburgerMenu";

function NavBar(props) {
  return (
    <div className="space-between nav-bar sticky top-0 z-50 flex justify-between border-none bg-black p-4 pl-8 text-xl font-extrabold text-neutral-300 shadow-md">
      <p>FCR Analytics</p>
      <HambugerMenu />
    </div>
  );
}

export default NavBar;
