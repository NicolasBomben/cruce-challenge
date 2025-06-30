//componentes.
import { Header } from "../components";
import { NuestrasMarcas } from "../components";
import { ProductsGridSection } from "../components";
import { TopBanner } from "../components";
import { Beneficios } from "../components";
import { Destacados } from "../components";
import { JugueteDelDia } from "../components";
import { LoMasBuscado } from "../components";
import { Campaña } from "../components";
import { BuscadosTimer } from "../components";
import { Control } from "../components";

export const Home = () => {
  return (
    <>
      <Header />
      <TopBanner />
      <Beneficios />
      <Destacados />
      <NuestrasMarcas />
      <JugueteDelDia />
      <LoMasBuscado />
      <ProductsGridSection
        title="Novedades"
        subTitle="VER TODO"
        colectionId={103}
      />
      <Campaña />
      <BuscadosTimer />
      <ProductsGridSection
        title="Te recomendamos"
        subTitle="VER TODO"
        colectionId={104}
      />
      <Control />
    </>
  );
};
