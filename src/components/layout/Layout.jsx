import { Outlet } from "react-router";

import { Header } from "../../components";
import { Footer } from "../../components";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
