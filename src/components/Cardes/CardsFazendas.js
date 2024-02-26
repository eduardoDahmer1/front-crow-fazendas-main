import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import FiltroLateral from "../FiltroLateral/FiltroLateral";
import { useRouter } from "next/router";
import { DataContext } from "../../context/DataContext";
import styles from "./EstilosFazenda.module.css";

function CardsFazendas() {
  const [fazendas, setFazendas] = React.useState();
  const [page, setPage] = React.useState(null);

  const router = useRouter();
  const { search } = React.useContext(DataContext);

  let searchDefault = router.query.q ? router.query.q : "";
  let pageDefault = router.query.p ? router.query.p : 1;

  const handleChangePage = (e) => {
    let pageChange = parseInt(e.currentTarget.getAttribute("data-page-ref"));
    setPage(pageChange);
  };

  const fetchFazendas = async (search, page) => {
    const response = await fetch(`/api/fazendas?q=${search}&p=${page}`);
    const json = await response.json();
    setFazendas(json);
  };

  function doTruncarStr(str, size) {
    if (
      str == undefined ||
      str == "undefined" ||
      str == "" ||
      size == undefined ||
      size == "undefined" ||
      size == ""
    ) {
      return str;
    }
    var shortText = str;
    if (str.length >= size + 3) {
      shortText = str.substring(0, size).concat("...");
    }
    return shortText;
  }

  React.useEffect(() => {
    let pesquisa = search ? search : searchDefault;
    let pagina = page ? page : pageDefault;
    setPage(pagina);
    fetchFazendas(pesquisa, pagina);
  }, [searchDefault, pageDefault, page]);

  return (
    <>
      <Container className={styles.ContainerFazendas}>
        <Row className={styles.HomeAndCod}>
          <Col className={styles.textoCodigoDesktop}>
            <h3 className={styles.TextoStyleFazenda}>Fazendas a venda</h3>
          </Col>
          <Col className={styles.TextoCodigo}>
            <FiltroLateral />
          </Col>
        </Row>
        <Row md={4} className="g-4">
          {fazendas?.data?.slice(0, 8).map((fazenda) => (
            <Col key={fazenda.code} xs="12" md="4" xl="3">
              <div className={styles.CardeProductssFazenda}>
                <Carousel>
                  {fazenda.images.slice(0, 3).map((img) => {
                    return (
                      <Carousel.Item>
                        <Link
                          as={`/fazenda/${fazenda.id}`}
                          href="/fazenda/[fazendaId]"
                          className={styles.LinkFazendaFazenda}
                        >
                          <img
                            className={styles.ImagemSliderr}
                            src={img.link}
                            alt={fazenda.name}
                          />
                        </Link>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
                <Link as={`/fazenda/${fazenda.id}`} href="/fazenda/[fazendaId]">
                  <div className={styles.divTitlefazendas}>
                    <p className={styles.textoParagrafoFazendasPrimeira}>
                      {doTruncarStr(fazenda.name, 45)}
                    </p>
                    <p className={styles.PriceFazendas}>
                      {fazenda.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <h3 id="descriptione" className={styles.subFazendas}>
                      {doTruncarStr(fazenda.description, 85)}
                    </h3>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
        <Container>
          <nav className={styles.StiloNav}>
            <ul className={styles.PaginateButtons}>
              {page === 1 ? (
                ""
              ) : (
                <>
                  <li>
                    <Link
                      legacyBehavior
                      as={`/fazendas?q=${search}&p=${fazendas?.page?.prev}`}
                      href="/fazendas"
                      passHref
                    >
                      <a
                        className={styles.StyleButtonsPaginate}
                        href
                        data-page-ref={fazendas?.page?.prev}
                        onClick={handleChangePage}
                      >
                        Anterior
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      legacyBehavior
                      as={`/fazendas?q=${search}&p=${fazendas?.page?.first}`}
                      href="/fazendas"
                      passHref
                    >
                      <a
                        className={styles.StyleButtonsPaginate}
                        href
                        data-page-ref={fazendas?.page?.first}
                        onClick={handleChangePage}
                      >
                        {fazendas?.page?.first}
                      </a>
                    </Link>
                  </li>
                </>
              )}
              {page > 3 ? (
                <div style={{ alignItems: "end" }}>
                  <span className={styles.StyleButtonsPaginate}>...</span>
                </div>
              ) : (
                ""
              )}
              {page > 2 ? (
                <li>
                  <Link
                    legacyBehavior
                    as={`/fazendas?q=${search}&p=${page - 1}`}
                    href="/fazendas"
                    passHref
                  >
                    <a
                      className={styles.StyleButtonsPaginate}
                      href
                      data-page-ref={page - 1}
                      onClick={handleChangePage}
                    >
                      {page - 1}
                    </a>
                  </Link>
                </li>
              ) : (
                ""
              )}

              <li>
                <a className={styles.StyleButtonsPaginateSelected}>{page}</a>
              </li>

              {page < fazendas?.page?.last ? (
                <li>
                  <Link
                    legacyBehavior
                    as={`/fazendas?q=${search}&p=${page + 1}`}
                    href="/fazendas"
                    passHref
                  >
                    <a
                      className={styles.StyleButtonsPaginate}
                      href
                      data-page-ref={page + 1}
                      onClick={handleChangePage}
                    >
                      {page + 1}
                    </a>
                  </Link>
                </li>
              ) : (
                ""
              )}

              {page < fazendas?.page?.last - 2 ? (
                <div
                  className={styles.StyleButtonsPaginate}
                  style={{ alignItems: "end" }}
                >
                  <span>...</span>
                </div>
              ) : (
                ""
              )}

              {page < fazendas?.page?.last - 1 ? (
                <>
                  <li>
                    <Link
                      legacyBehavior
                      as={`/fazendas?q=${search}&p=${fazendas?.page?.last}`}
                      href="/fazendas"
                      passHref
                    >
                      <a
                        className={styles.StyleButtonsPaginate}
                        href
                        data-page-ref={fazendas?.page?.last}
                        onClick={handleChangePage}
                      >
                        {fazendas?.page?.last}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      legacyBehavior
                      as={`/fazendas?q=${search}&p=${fazendas?.page?.next}`}
                      href="/fazendas"
                      passHref
                    >
                      <a
                        href
                        className={styles.StyleButtonsPaginate}
                        data-page-ref={fazendas?.page?.next}
                        onClick={handleChangePage}
                      >
                        Próximo
                      </a>
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </nav>
        </Container>
      </Container>
    </>
  );
}

export default CardsFazendas;
