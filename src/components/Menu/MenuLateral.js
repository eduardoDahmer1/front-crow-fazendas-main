import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuConteudo from "./MenuConteudo/MenuConteudo";
import MenuConteudoMobile from "./MenuMobileConteudo/MenuConteudoMobile";
import styles from "./Estilo.module.css";

function MenuLateral() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={styles.Butonmenu} variant="primary" onClick={handleShow}>
        <GiHamburgerMenu className={styles.MenuIicone} />
      </Button>
      <Button className={styles.ButonmenuMobile} variant="primary" onClick={handleShow}>
        <GiHamburgerMenu className={styles.MenuIiconeMobile} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="menulateral">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MenuConteudo />
          <MenuConteudoMobile />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MenuLateral;
