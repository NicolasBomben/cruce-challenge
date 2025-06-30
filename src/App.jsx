import { Route, Routes } from "react-router";
//layout
import { Layout }  from "./layout/Layout";
//pages
import { Home, Listado } from "./pages";

//css
import "./styles/global.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<Listado />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
