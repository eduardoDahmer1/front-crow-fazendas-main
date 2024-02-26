import Container from "react-bootstrap/Container";
import React from "react";
import { DataContext } from "../../context/DataContext";
import { useRouter } from "next/router";
import { BiSearchAlt } from "react-icons/bi";
import styles from "./Estilo.module.css";

function Buscador() {
  const [search, setSearch] = React.useState(""); // Inicia o estado com uma string vazia
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/fazendas",
      query: { q: search },
    });
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value); // Atualiza o estado com o valor da entrada
  };
  
  return (
    <Container className={styles.ContainerBuscador}>
      <div className={styles.TituloBuscador}>
        <h1 className={styles.TituloHome}>Fazendas com excelência</h1>
      </div>
      <form onSubmit={handleSearch}>
        <fieldset className={styles.BorderBuscador}>
          <div className={styles.DivBuscadorMobile}>
            <BiSearchAlt className={styles.LupaIcone} />
            <input
              className={styles.inputBuscador}
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Procure sua fazenda por região, cidade"
            />
          </div>
          <button className={styles.buttonBuscador} type="search">
            Buscar
          </button>
        </fieldset>
      </form>
    </Container>
  );
}

export default Buscador;
