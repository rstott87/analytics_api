import NavBar from "./UI/NavBar";

export default function Layout({ children }) {
  return (
    <div className="bg-black">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
