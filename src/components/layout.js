import NavBar from "./UI/NavBar";

export default function Layout({ children }) {
  return (
    <div className="bg-black">
      <NavBar />
      <main>{children}</main>
      <footer className="text-slate-500 text-center text-sm p-4 pt-8"> FCR Analytics LLC 2023 </footer>
    </div>
  );
}
