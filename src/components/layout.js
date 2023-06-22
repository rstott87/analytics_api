import NavBar from "./UI/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer className="p-4 pt-8 text-center text-sm text-slate-500">
        {" "}
        FCR AnalyticsLLC 2023{" "}
      </footer>
    </>
  );
}
