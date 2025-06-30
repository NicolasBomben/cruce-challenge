import { Outlet } from "react-router";


import { Footer } from "../components";

export const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};


