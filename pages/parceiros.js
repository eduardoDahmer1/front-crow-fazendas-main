import Head from "next/head";
import Footer from "../src/components/footer/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuLateral from "../src/components/Menu/MenuLateral";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdPhonePortrait } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import styles from "./Parceiros.module.css";

export default function Parceiros() {
  return (
    <>
      <Head>
        <title>Parceiros</title>
        <link rel="canonical" href="/parceiros" />
        <meta property="og:url" content="/parceiros" />
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
      <Container fluid className="seçaoHeaderSecondary">
        <Row className="paddHeader">
          <Col>
            <Link className="ImagemHeaderPosition" passHref href="/">
              <Image
                src="/logocrowfazendasbranca.png"
                alt="Vercel Logo"
                className="LogoFazendas"
                width={250}
                height={100}
                priority
              />
            </Link>
          </Col>
          <Col md="auto">
            {" "}
            <Nav className="NavHeader">
              <Nav.Link href="/">
                {" "}
                <TbPhoneCall className="IconesHeader" />
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
                <IoMdPhonePortrait className="IconesHeader" /> Vendas
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/crowtech.digital/">
                {" "}
                <RiInstagramFill className="IconesHeader" /> Instagram
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs lg="1" className="MenuIco">
            <MenuLateral />
          </Col>
        </Row>
        <div className="TituloPaginaInterna">
          <h1 className="TituloInterna">Parceiros</h1>
          <p className="InicioBarra">
            <Link className="MarginHome" passHref href="/">
              <FaHome className="IcoHome" />
              Inicio{" "}
            </Link>{" "}
            | <span className="Textotitulo">Parceiros</span>
          </p>
        </div>
      </Container>
      <main className="ContainerImagemFundoParceiros">
        <Container>
          <Row>
            <Col className="CardsParceiros" xs="12" md="4" xl="3">
              <Card className="CardParceiros">
                <Card.Img
                  className="ImagensParceiros"
                  variant="top"
                  src="/radarfoz.png"
                />
                <Card.Body className="CorpoParceiros">
                  <Card.Text className="TextoParceiros">
                    Site de notícias sobre a cidade de Foz do Iguaçu e Região.
                    Atualizado frequentemente para levar informações para todo o
                    Brasil.
                  </Card.Text>
                  <Button className="BotaoParceiros" variant="primary">
                    <a className="LinkDosParceiros" href="https://www.radarfoz.com.br/">Saiba mais</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="CardsParceiros" xs="12" md="4" xl="3">
              <Card className="CardParceiros">
                <Card.Img
                  className="ImagensParceiros"
                  variant="top"
                  src="/logorapidinhacolorida.png"
                />
                <Card.Body className="CorpoParceiros">
                  <Card.Text className="TextoParceiros">
                    A Rapidinha é a MELHOR versão de tudo o que você já viu por
                    aí. Conecte o seu negócio, venda online em qualquer horário
                    de forma rápida e sem burocracia.
                  </Card.Text>
                  <Button className="BotaoParceiros" variant="primary">
                    <a className="LinkDosParceiros" href="https://lojarapidinha.com.br/">Saiba mais</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="CardsParceiros" xs="12" md="4" xl="3">
              <Card className="CardParceiros">
                <Card.Img
                  className="ImagensParceiros"
                  variant="top"
                  src="construfour.png"
                />
                <Card.Body className="CorpoParceiros">
                  <Card.Text className="TextoParceiros">
                    Construfour é uma empresa com o propósito de realizar os
                    sonhos de seus clientes, especializada em projetos
                    arquitetônicos e projetos de regularização “averbação”.
                  </Card.Text>
                  <Button className="BotaoParceiros" variant="primary">
                    <a className="LinkDosParceiros" href="https://construfour.com.br/">Saiba mais</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="CardsParceiros" xs="12" md="4" xl="3">
              <Card className="CardParceiros">
                <Card.Img
                  className="ImagensParceiros"
                  variant="top"
                  src="v4company.png"
                />
                <Card.Body className="CorpoParceiros">
                  <Card.Text className="TextoParceiros">
                    A missão da V4 Company é criar um marketing que vai te
                    ajudar a vender seu produto, vender mais vezes, vender para
                    mais pessoas e vender pelo maior preço.
                  </Card.Text>
                  <Button className="BotaoParceiros" variant="primary">
                    <a className="LinkDosParceiros" href="https://v4company.com/">Saiba mais</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="CardsParceiros" xs="12" md="4" xl="3">
              <Card className="CardParceiros">
                <Card.Img
                  className="ImagensParceiros"
                  variant="top"
                  src="raimoveis.png"
                />
                <Card.Body className="CorpoParceiros">
                  <Card.Text className="TextoParceiros">
                    Conheça a R.A Imóveis e se surpreenda! Venda e locação em
                    Foz e Região... Empresa Parceira Rede
                  </Card.Text>
                  <Button className="BotaoParceiros" variant="primary">
                    <a className="LinkDosParceiros" href="https://www.raimoveisfoz.com.br/">Saiba mais</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="CardsParceiros" xs="12" md="4" xl="3">
              <Card className="CardParceiros">
                <Card.Img
                  className="ImagensParceiros"
                  variant="top"
                  src="casafoz.png"
                />
                <Card.Body className="CorpoParceiros">
                  <Card.Text className="TextoParceiros">
                    A CASAFOZ Imóveis com 7 anos de história no mercado
                    imobiliário de Foz do Iguaçu, oferecendo aos seus clientes
                    soluções completas em assessoria imobiliária, sempre
                  </Card.Text>
                  <Button className="BotaoParceiros" variant="primary">
                    <a className="LinkDosParceiros" href="https://www.casafozimoveis.com.br/">Saiba mais</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="CardsParceiros" xs="12" md="4" xl="3">
              <Card className="CardParceiros">
                <Card.Img
                  className="ImagensParceiros"
                  variant="top"
                  src="precos.png"
                />
                <Card.Body className="CorpoParceiros">
                  <Card.Text className="TextoParceiros">
                    Preços no Paraguai é um site independente criado para ajudar
                    você a encontrar os melhores preços e produtos no Paraguai -
                    Cidade Del Leste com a qualidade das maiores e melhores
                    lojas na região.
                  </Card.Text>
                  <Button className="BotaoParceiros" variant="primary">
                    <a className="LinkDosParceiros" href="https://precosnoparaguai.com.br/">Saiba mais</a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
