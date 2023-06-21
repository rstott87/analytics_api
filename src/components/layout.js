import NavBar from "./UI/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer className="text-slate-500 text-center text-sm p-4 pt-8"> FCR AnalyticsLLC 2023 </footer>
    </>
  );
}
