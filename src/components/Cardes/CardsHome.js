import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import React from "react";
import { DataContext } from "../../context/DataContext";
import { BiRightArrowAlt } from 'react-icons/bi';
import styles from "./Estilo.module.css";

function CardsHome() {
  const [fazendas, setFazendas] = React.useState();
  const [page, setPage] = React.useState(1);

  const { search } = React.useContext(DataContext);

  const fetchFazendas = async (search, page) => {
    const response = await fetch(`/api/fazendas?q=${search}&p=${page}`);
    const json = await response.json();
    setFazendas(json);
  };

  React.useEffect(() => {
    fetchFazendas(search, page);
  }, []);
  return (
    <>
      <Container>
        <div className={styles.Oportunidade}>
          <h1>
            <Link className={styles.OportunidadeLink} href="/fazendas">
            Ache aqui sua fazenda
            </Link>
          </h1>
          <Link className={styles.OportunidadeLink} href="/fazendas">
            Ver mais <BiRightArrowAlt />
          </Link>
        </div>
        <Row md={4} className="g-4">
          {fazendas?.data?.slice(0, 8).map((fazenda) => (
            <Col key={fazenda.code} xs="12" md="4" xl="3">
              <div className={styles.CardeProductss}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Link
                  as={`/fazenda/${fazenda.id}`}
                  href="/fazenda/[fazendaId]"
                  className={styles.LinkFazendaHome}
                >
                <img
                  className={styles.ImagemSlider}
                  src={fazenda.images[0].link}
                  alt={fazenda.name}
                />
                <div className={styles.divTitle}>
                    <h3 className={styles.TituloFazenda}>{fazenda.name}</h3>
                </div>
                  </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CardsHome;
