import HambugerMenu from "./HamburgerMenu";

function NavBar(props) {
  return (
    <div className="space-between nav-bar sticky top-0 z-50 flex justify-between border-none bg-black p-4 pl-8 text-2xl font-normal text-neutral-300 opacity-90 shadow-md shadow-slate-600">
      <p>FCR Analytics</p>
      <HambugerMenu />
    </div>
  );
}

export default NavBar;
