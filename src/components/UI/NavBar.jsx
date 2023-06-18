import HambugerMenu from "./HamburgerMenu";

function NavBar(props) {
  return (
    <div className="space-between flex justify-between nav-bar sticky top-0 z-50 bg-black text-neutral-300 p-4 pl-8 text-2xl font-normal">
      <p>FCR Analytics</p>
      <HambugerMenu />
    </div>
  );
}

export default NavBar;
