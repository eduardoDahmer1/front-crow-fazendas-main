import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import MenuLateral from "../Menu/MenuLateral";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdPhonePortrait } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import Buscador from "../Buscador/Buscador";
import Link from "next/link";
import styles from "./Estilo.module.css";

function HeaderPrimary() {
  return (
    <>
      <Container fluid className={styles.seçaoHeader}>
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
                <TbPhoneCall className="IconesHeader" />
              </Nav.Link>
              <div className={styles.CellLineHeight}>
                <Nav.Link href="https://api.whatsapp.com/send?phone=554591343573&text=Ol%C3%A1.%20Entrei%20no%20site%20de%20voc%C3%AAs%20e%20me%20interessei%20pelos%20servi%C3%A7os.%20Poderia%20me%20ajudar%3F">(55) 45 91343573</Nav.Link>
                <Nav.Link href="https://api.whatsapp.com/send?phone=554591343573&text=Ol%C3%A1.%20Entrei%20no%20site%20de%20voc%C3%AAs%20e%20me%20interessei%20pelos%20servi%C3%A7os.%20Poderia%20me%20ajudar%3F"> Telefone</Nav.Link>
              </div>
              <Nav.Link href="https://api.whatsapp.com/send?phone=554591343573&text=Ol%C3%A1.%20Entrei%20no%20site%20de%20voc%C3%AAs%20e%20me%20interessei%20pelos%20servi%C3%A7os.%20Poderia%20me%20ajudar%3F">
                {" "}
                <IoMdPhonePortrait className={styles.IconesHeader} /> VENDAS
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/crowtech.digital/">
                {" "}
                <RiInstagramFill className={styles.IconesHeader} /> INSTAGRAM
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs lg="1" className={styles.MenuIco}>
            <MenuLateral />
          </Col>
        </Row>
        <Buscador />
      </Container>
    </>
  );
}

export default HeaderPrimary;
