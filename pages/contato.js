import Head from "next/head";
import Footer from "../src/components/footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import React from "react";
import MenuLateral from "../src/components/Menu/MenuLateral";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdPhonePortrait } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato</title>
        <link rel="canonical" href="/contato" />

        <meta property="og:url" content="/contato" />
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
            <Link passHref href="/">
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
          <h1 className={styles.TituloInterna}>Contato</h1>
          <p className={styles.InicioBarra}>
          <Link className={styles.MarginHome} passHref href="/"><FaHome className={styles.IcoHome} />
           Inicio </Link> | <span className={styles.Textotitulo}>Contato</span>
          </p>
        </div>
      </Container>
      <main className={styles.ContainerImagemFundo}>
        <Container className={styles.ContainerContacts}>
          <h1 className={styles.TituloContacts}>
            <Card.Img className={styles.PalhaPhoto} variant="top" src="/palha.png" />
            Entre em contato
          </h1>
          <p>Were Ready to Help You! Need Any Foods or Consultations ?</p>
          <Row>
            <Col md={3} className={styles.CardsContacts}>
              <Card className={styles.CardColor}>
                <Card.Body className={styles.CardBody}>
                  <Card.Text className={styles.IcoContacts}>
                    <ImLocation2 className={styles.icoContato} />
                  </Card.Text>
                  <Card.Title className={styles.TitulosContatos}>
                    Localização
                  </Card.Title>
                  <Card.Subtitle className={styles.textmuted}>
                    Rua Luísa Wandscher, 248 - Jardim Copacabana - Foz do
                    Iguaçu/PR
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className={styles.CardsContacts}>
              <Card className={styles.CardColor}>
                <Card.Body className={styles.CardBody}>
                  <Card.Text className={styles.IcoContacts}>
                    <MdOutlineEmail className={styles.icoContato} />
                  </Card.Text>
                  <Card.Title className={styles.TitulosContatos}>
                    Endereço de Email
                  </Card.Title>
                  <Card.Subtitle className={styles.textmuted}>
                    Exemplo@gmail.com Exemplo@gmail.com
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className={styles.CardsContacts}>
              <Card className={styles.CardColor}>
                <Card.Body className={styles.CardBody}>
                  <Card.Text className={styles.IcoContacts}>
                    <BsFillTelephoneFill className={styles.icoContato} />
                  </Card.Text>
                  <Card.Title className={styles.TitulosContatos}>
                    Numero de telefone
                  </Card.Title>
                  <Card.Subtitle className={styles.textmuted}>
                    (55) 45 91343573
                    <br />
                    (55) 45 91343573
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={2} md={3} className={styles.CardPhoto}>
              <Card className={styles.CardPhotoDimension}>
                <Card.Img
                  className={styles.PhotoDimension}
                  variant="top"
                  src="/PhotoContact.jpg"
                />
              </Card>
            </Col>
          </Row>
          <p className={styles.textContacts}>
            Natus error sit voluptatem accusantium doloremque laudatium, totam
            rem aperiam eaque ipsa quae abllo inventore veritatis et quase
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
