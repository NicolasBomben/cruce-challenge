//componentes.
import { Header } from "../components";
import { TopBanner } from "../components";
import { Beneficios } from "../components";
import { Destacados } from "../components";
import { JugueteDelDia } from "../components";
import { LoMasBuscado } from "../components";
import { Novedades } from "../components";
import { Campaña } from "../components";
import { BuscadosTimer } from "../components";
import { Recomendados } from "../components";
import { Control } from "../components";

export const Home = () => {
  return (
    <main>
      <Header/>
      <TopBanner/>
      <Beneficios/>
      <Destacados />
      <JugueteDelDia />
      <LoMasBuscado />
      <Novedades />
      <Campaña/>
      <BuscadosTimer/>
      <Recomendados />
      <Control/>
    </main>
  );
};
