import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRouter } from "next/router";
import { DataContext } from "../../context/DataContext";
import styles from "./Estilo.module.css";

function FiltroLateral() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  
  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    setMaxValue(value);
  };

  const { setSearch } = React.useContext(DataContext);

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    setShow(false);
    setSearch(document.querySelector("[name=procura]").value);
    router.push({
      pathname: "/fazendas",
      query: {
        q: document.querySelector("[name=procura]").value,
        p: 1,
        min: document.querySelector("[name=minValor]").value,
        max: document.querySelector("[name=maxValor]").value,
      },
    });
  };

  return (
    <>
      <Button
        className={styles.FiltroFazendas}
        variant="primary"
        onClick={handleShow}
      >
        Mais Filtros +
      </Button>

      <Modal
        id={styles.ModalFiltros}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id={styles.TituloFiltro}>Mais Filtros</Modal.Title>
        </Modal.Header>
        <div id={styles.CorpoInputFiltro}>
          <Modal.Body id={styles.ModalBodyFiltro}>
            <Form className={styles.FormEspacing}>
              <div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Digite nome, estado ou código</Form.Label>
                  <Form.Control
                    className={styles.SubmitFiltro}
                    name="procura"
                    type="text"
                    placeholder="Digite nome, estado ou código"
                    autoFocus
                  />
                </Form.Group>
                <Form.Label className={styles.LabelInputFiltro}>
                  Preço a venda
                </Form.Label>
                <Row>
                  <Col className={styles.InputFiltro}>
                    <Form.Label className={styles.LabelInputFiltro}>
                      De: R$ 4000000000
                    </Form.Label>
                    <input
                      className={styles.inputNumber}
                      value={minValue}
                      type="number"
                      name="minValor"
                      aria-describedby="passwordHelpBlock"
                    />
                  </Col>
                  <Col className={styles.InputFiltro}>
                    <Form.Label className={styles.LabelInputFiltro}>
                      Até: R$ 1600000000000
                    </Form.Label>
                    <input
                      className={styles.inputNumber}
                      type="number"
                      placeholder
                      value={maxValue}
                      name="maxValor"
                      aria-describedby="passwordHelpBlock"
                    />
                  </Col>
                </Row>
                <div className={styles.rangeInput}>
                  <input
                    className={styles.inputRangeLeft}
                    type="range"
                    id="min-value"
                    name="min-value"
                    min="1000000"
                    max="4000000000"
                    value={minValue}
                    onChange={handleMinChange}
                  />
                  <input
                    className={styles.inputRange}
                    type="range"
                    id="max-value"
                    name="max-value"
                    min=""
                    max="160000000000"
                    value={maxValue}
                    onChange={handleMaxChange}
                  />
                </div>
              </div>
              <div className={styles.BotoesFiltro}>
                <Button
                  style={{ background: "#A98263" }}
                  type="submit"
                  className={styles.FiltroLateral}
                  variant="primary"
                  onClick={handleSearch}
                >
                  Encontrar Propriedade
                </Button>
                <Button
                  onClick={handleReset}
                  id="Limpar"
                  className={styles.FiltroLateral}
                  variant="primary"
                >
                  Limpar filtros
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default FiltroLateral;
