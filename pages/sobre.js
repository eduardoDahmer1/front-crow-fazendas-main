import Head from "next/head";
import Footer from "../src/components/footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import React from "react";
import MenuLateral from "../src/components/Menu/MenuLateral";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdPhonePortrait } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre nós</title>
        <link rel="canonical" href="/sobre" />
        <meta property="og:url" content="/sobre" />
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
      <Container fluid className={styles.seçaoHeaderSecondary}>
        <Row className={styles.paddHeader}>
          <Col>
            <Link className={styles.ImagemHeaderPosition} passHref href="/">
              <Image
                src="/logocrowfazendasbranca.png"
                alt="Vercel Logo"
                className={styles.LogoFazendas}
                width={250}
                height={100}
                priority
              />
            </Link>
          </Col>
          <Col md="auto">
            {" "}
            <Nav className={styles.NavHeader}>
              <Nav.Link href="/">
                {" "}
                <TbPhoneCall className={styles.IconesHeader} />
              </Nav.Link>
              <div className={styles.CellLineHeight}>
                <Nav.Link href="https://api.whatsapp.com/send?phone=554591343573&text=Ol%C3%A1.%20Entrei%20no%20site%20de%20voc%C3%AAs%20e%20me%20interessei%20pelos%20servi%C3%A7os.%20Poderia%20me%20ajudar%3F">
                  (55) 45 91343573
                </Nav.Link>
                <Nav.Link href="https://api.whatsapp.com/send?phone=554591343573&text=Ol%C3%A1.%20Entrei%20no%20site%20de%20voc%C3%AAs%20e%20me%20interessei%20pelos%20servi%C3%A7os.%20Poderia%20me%20ajudar%3F">
                  {" "}
                  Telefone
                </Nav.Link>
              </div>
              <Nav.Link href="https://api.whatsapp.com/send?phone=554591343573&text=Ol%C3%A1.%20Entrei%20no%20site%20de%20voc%C3%AAs%20e%20me%20interessei%20pelos%20servi%C3%A7os.%20Poderia%20me%20ajudar%3F">
                {" "}
                <IoMdPhonePortrait className={styles.IconesHeader} /> Vendas
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/crowtech.digital/">
                {" "}
                <RiInstagramFill className={styles.IconesHeader} /> Instagram
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs lg="1" className={styles.MenuIco}>
            <MenuLateral />
          </Col>
        </Row>
        <div className={styles.TituloPaginaInterna}>
          <h1 className={styles.TituloInterna}>Sobre nós</h1>
          <p className={styles.InicioBarra}>
            <Link className={styles.MarginHome} passHref href="/">
              <FaHome className={styles.IcoHome} />
              Inicio{" "}
            </Link>{" "}
            | <span className={styles.Textotitulo}>Sobre nós</span>
          </p>
        </div>
      </Container>
      <main className={styles.ContainerImagemFundo}>
        <Container className={styles.ContainerSobre}>
          <Row>
            <Col className={styles.BoxPrincipalSobre}>
              <Card.Body className={styles.CardBody}>
                <Card.Title className={styles.TituloSobre}>
                Quem nos Somos
                </Card.Title>
                <Card.Text className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum.
                </Card.Subtitle>
              </Card.Body>
            </Col>
            <Col className={styles.FazendeiroFotoOne}>
              <Card className={styles.CardImageSobre}>
                <Card.Img
                  className={styles.FazendeiroTamanho}
                  variant="top"
                  src="/Fazendeiro.jpg"
                />
              </Card>
            </Col>
            <Col className={styles.FazendeiroFotoTwo}>
              {" "}
              <Card className={styles.CardRedondo}>
                <Card.Img
                  className={styles.ImagemRedonda}
                  variant="top"
                  src="/AgroTech.jpg"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
