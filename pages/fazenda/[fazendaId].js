import Head from "next/head";
import React from "react";
import HeaderThird from "../../src/components/header/HeaderThird";
import Footer from "../../src/components/footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BoxLocal from "../../src/components/Box/BoxLocal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TbPhoto } from "react-icons/tb";
import { ImWhatsapp } from "react-icons/im";
import styles from "./Fazenda.module.css";
import { style } from "@mui/system";

function handleClick(event) {
  event.preventDefault();
}
export default function Fazenda({ fazenda }) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  function onClose() {}
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/fazendas">
      Fazendas
    </Link>,
    <Typography color="inherit" key={fazenda.id}>
      {fazenda.name}
    </Typography>,
  ];

  return (
    <>
      <Head>
        <title>{fazenda.name}</title>
        <link rel="canonical" href="/" />
        <meta property="og:url" content="/" />
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
      <main className="pb-3">
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
        <Container className={styles.ContainerFazenda}>
          <Row className={styles.TextoFazenda}>
            <Col md={12} className={styles.espaçamentoTitulo}>
              <h3 className={styles.TextoStyleFazenda}>{fazenda.name}</h3>
            </Col>
            <Col className={styles.PricePagFazenda}>
              <h3 className={styles.priceDesktop}>
                {fazenda.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
            </Col>
          </Row>
          <Row className={styles.ScrollImages}>
            {fazenda.images.slice(0, 8).map((img, v, idx) => {
              return (
                <Col className={styles.GaleriaInterna} key={img.id} md={3}>
                  <Button
                    key={idx}
                    className={styles.ButtonOneGaleriaOne}
                    onClick={() => handleShow(v)}
                  >
                    <img
                      className={styles.TamanhoGaleria}
                      src={img.link}
                      alt=""
                    />
                  </Button>
                </Col>
              );
            })}
          </Row>
          <Modal
            id={styles.Modale}
            show={show}
            fullscreen={fullscreen}
            onHide={() => setShow(false)}
          >
            <Modal.Header id={styles.headerGaleria} closeButton>
              <Modal.Title id={styles.ModalHeaderGaleria}>
                <a className={styles.linkModalHeader} href="/contato">
                  Gostou? Entre em contato
                </a>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body id={styles.CorpoGaleria}>
              <h1 className={styles.PhotosGaleria}>
                <TbPhoto /> Fotos
              </h1>
              <Row>
                {fazenda.images.map((img) => {
                  return (
                    <Col className={styles.GaleriaInterna} key={img.id} md={3}>
                      <img
                        className={styles.TamanhoGaleria}
                        src={img.link}
                        alt=""
                      />
                    </Col>
                  );
                })}
              </Row>
            </Modal.Body>
            <Modal.Footer className={styles.linkModalHeaderMobileFooter}>
              <a className={styles.linkModalHeaderMobile} href="/contato">
                Gostou? Entre em contato
              </a>
            </Modal.Footer>
          </Modal>

          <div className="pb-4">
            <h3 className={styles.priceMobile}>
              {fazenda.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h3>
            <h1 className={styles.SobreApropriedade}>Sobre a Propriedade</h1>
            <p className={styles.DescriptionFazenda}>{fazenda.description}</p>
          </div>
          <a
            className={styles.WhatsappPagInterna}
            href="https://api.whatsapp.com/send?phone=554591343573&text=Ol%C3%A1.%20Entrei%20no%20site%20de%20voc%C3%AAs%20e%20me%20interessei%20pelos%20servi%C3%A7os.%20Poderia%20me%20ajudar%3F"
          >
            Entre em contato <ImWhatsapp className={style.IcoWppInterna} />
          </a>
        </Container>
        <BoxLocal />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const options = {
    method: "get",
    headers: {
      Authorization: `Bearer apanTOmOuTetYrfaRgANtraW`,
    },
  };

  const response = await fetch(
    `https://goweb.cloudcrow.com.br/${ctx.query.fazendaId}`,
    options
  );
  const fazenda = await response.json();
  return { props: { fazenda } };
}
