import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuLateral from "../Menu/MenuLateral";
import Image from "next/image";
import styles from "./EstiloThird.module.css";
import Link from "next/link";

function HeaderThird() {
  return (
    <>
      <Container>
        <Row className={styles.paddHeaderThird}>
          <Col>
            <Link href="/" passHref>
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
          <Col xs lg="1" className={styles.MenuIco}>
            <MenuLateral />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeaderThird;
