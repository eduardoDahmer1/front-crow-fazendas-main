import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Link from "next/link";
import styles from "./Estilo.module.css";

const BoxLocal = () => {
  return (
    <>
      <Container className={styles.ContainerBoxe}>
        <Row className={styles.AlinhamentoBox}>
          <Col className={styles.LogoTopoBox}>
            <img className={styles.LogoBox} src="/logocrowfazendasbranca.png" />
          </Col>
          <Col className={styles.AlinhamentoTextoBox}>
            <Link href="/contato">
              <p className={styles.marizName}>Matriz</p>
              <p>
                Rua Luísa Wandscher, 248 - Jardim Copacabana - Foz do Iguaçu/PR
              </p>
              <p>Foz Do Iguaçu/PR</p>
              <p>(55) 45 91343573</p>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className={styles.HorarioFuncionamentoBox}>
        <h1 className={styles.HorarioFont}>Horário de Funcionamento</h1>
        <p>Seg a Sex: 08.30 ás 18.00</p>
      </div>
    </>
  );
};

export default BoxLocal;
