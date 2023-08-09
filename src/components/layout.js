import NavBar from "./UI/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <NavBar />
        <main className="">{children}</main>
        <footer className="p-4 text-center text-sm text-slate-500">
          {" "}
          FCR Analytics LLC 2023{" "}
        </footer>
      </div>
    </>
  );
}
