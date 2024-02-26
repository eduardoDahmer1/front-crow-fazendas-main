import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiInstagram } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import styles from "./Estilo.module.css";

function Footer() {
  return (
    <footer className={styles.ContainerFooter}>
      <Container className={styles.ContainerFooterInterno}>
        <Row>
          <Col className={styles.spaceCols} md={3}>
            <Link href="/sobre" passHref>
              <h3 className={styles.FooterTitler}>Institucional</h3>
              <p>Política de privacidade</p>
            </Link>
          </Col>
          <Col md={3} className={styles.spaceCols.FaleConosco}>
            <Link passHref href="/fazendas">
              <h3 className={styles.FooterTitler}>Imoveis</h3>
              <p>Encontre sua propriedade</p>
            </Link>
          </Col>
          <Col className={styles.spaceCols} md={3}>
            <Link href="/parceiros" className={styles.FooterTitler}>
              <h3>Parceiros</h3>
            </Link>
          </Col>
          <Col className={styles.spaceCols} md={3}>
            <Link href="/contato" passHref>
              <h3 className={styles.FooterTitler}>Contato</h3>
              <p>Fale Conosco</p>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className={styles.FooterCopRight}>
        <Container className={styles.CopFooter}>
          <p>
            Desenvolvido com <AiFillHeart className={styles.HeartFooter} /> por{" "}
            <a href="https://crowtech.digital/">
              <mark className={styles.MarkAsCrowtech}>Crowtech</mark>
            </a>
          </p>
          <Link passHref href="https://www.instagram.com/crowtech.digital/">
            <p className={styles.instagramIcoFooter}>
              <FiInstagram />
            </p>
          </Link>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
