import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiInstagram } from "react-icons/fi";
import { TbPhoneCall } from "react-icons/tb";
import Link from "next/link";
import styles from "./Estilo.module.css";

const MenuConteudo = () => {
  return (
    <>
      <Row className={styles.ConteudoThisMenu}>
        <Col xs={2} className={styles.asideMenu}>
          <ListGroup>
            <ListGroup.Item className={styles.ConteudoMenuLateralasideCelll}>
              <h5 className={styles.CrowMenu}>CrowFazendas</h5>
              <Link
                className={styles.iconesFooter}
                href="https://api.whatsapp.com/send?phone=554591343573&text=Ol%C3%A1.%20Entrei%20no%20site%20de%20voc%C3%AAs%20e%20me%20interessei%20pelos%20servi%C3%A7os.%20Poderia%20me%20ajudar%3F"
              >
                <TbPhoneCall className={styles.icoFooter} />
                (55) 45 91343573
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className={styles.ConteudoMenuLateralaside}>
              <Link
                className={styles.RedesSocias}
                href="https://www.instagram.com/crowtech.digital/"
              >
                <FiInstagram />
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className={styles.mainMenu}>
          <Link
            className={styles.ColorTextMenu}
            href="https://api.whatsapp.com/send?phone=554591343573&text=Ol%C3%A1.%20Entrei%20no%20site%20de%20voc%C3%AAs%20e%20me%20interessei%20pelos%20servi%C3%A7os.%20Poderia%20me%20ajudar%3F"
          >
            VENDAS
          </Link>
          <Link
            className={styles.ColorTextMenu}
            href="https://www.instagram.com/crowtech.digital/"
          >
            INSTAGRAM
          </Link>
          <Link className={styles.ColorTextMenu} href="/sobre">
            INSTITUCIONAL
          </Link>
          <Link href="/sobre">Política de privacidade</Link>
          <Link className={styles.ColorTextMenu} href="/fazendas">
            Propriedades
          </Link>
          <Link href="/fazendas">Encontre sua propriedade</Link>
          <Link className={styles.ColorTextMenu} href="/parceiros">
            Parceiros
          </Link>
          <Link className={styles.ColorTextMenu} href="/contato">
            Contato
          </Link>
          <Link href="/contato">Fale Conosco</Link>
        </Col>
      </Row>
    </>
  );
};

export default MenuConteudo;
