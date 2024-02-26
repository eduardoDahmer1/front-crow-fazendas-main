import Head from "next/head";
import HeaderPrimary from "../src/components/header/HeaderPrimary";
import Footer from "../src/components/footer/Footer";
import CardsHome from "../src/components/Cardes/CardsHome";
import BoxLocal from "../src/components/Box/BoxLocal"


export default function Index() {
  return (
    <>
      <Head>
      <title>Crow Fazendas</title>
          <link rel="canonical" href="/" />
          <meta property="og:url" content="/" />
          <meta name="description" content="Com um time altamente qualificado, conseguimos identificar suas necessidades, compatibilizar com um banco de propriedades, disponíveis em todo o Brasil, assessorando você do início até a aquisição da área ideal para seu uso ou investimento."/>
          <meta property="og:title" content="Com a ajuda dos melhores especialistas do mercado. Um banco com mais de 2 mil propriedades para você." />
          <meta property="og:description" content="Com um time altamente qualificado, conseguimos identificar suas necessidades, compatibilizar com um banco de propriedades, disponíveis em todo o Brasil, assessorando você do início até a aquisição da área ideal para seu uso ou investimento." />
       <link rel="icon" href="/palhaico.ico" />
      </Head>
      <HeaderPrimary />
      <main>
        <CardsHome />
        <BoxLocal />
      </main>
      <Footer />
    </>
  );
}
