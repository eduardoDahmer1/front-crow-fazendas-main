import Head from "next/head";
import HeaderThird from "../src/components/header/HeaderThird";
import Footer from "../src/components/footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import CardsFazendas from "../src/components/Cardes/CardsFazendas";
import BoxLocal from "../src/components/Box/BoxLocal";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import styles from "./Fazendas.module.css";

export default function Fazendas() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/fazendas">
      Fazendas
    </Link>,
  ];
  return (
    <>
      <Head>
        <title>Fazendas</title>
        <link rel="canonical" href="/fazendas" />
        <meta property="og:url" content="/fazendas" />
        <meta
          name="description"
          content="Com um time altamente qualificado, conseguimos identificar suas necessidades, compatibilizar com um banco de propriedades, disponíveis em todo o Brasil, assessorando você do início até a aquisição da área ideal para seu uso ou investimento."
        />
        <meta
          property="og:title"
          content="Com a ajuda dos melhores especialistas do mercado. Um banco com mais de 2 mil propriedades para você."
        />
        <meta
          property="og:description"
          content="Com um time altamente qualificado, conseguimos identificar suas necessidades, compatibilizar com um banco de propriedades, disponíveis em todo o Brasil, assessorando você do início até a aquisição da área ideal para seu uso ou investimento."
        />
        <link rel="icon" href="/palhaico.ico" />
      </Head>
      <HeaderThird />
      <main>
        <Container fluid className={styles.NavegaçãoLinks}>
          <Container className={styles.espaçamentoTitulo}>
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                style={{ color: "white" }}
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
          </Container>
        </Container>
        <CardsFazendas />
        <BoxLocal />
      </main>
      <Footer />
    </>
  );
}
