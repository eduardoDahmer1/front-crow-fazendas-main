import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import styles from "./Estilo.module.css";

function Propriedades() {
  return (
    <>
    <Container className={styles.PropriedadesEstado}>
        <div>
            <h1>Propriedades por Estado</h1>
        </div>
    <Table striped="columns">
      <thead>
        <tr>
          <th>Sao Paulo</th>
          <th>Parana</th>
          <th>Mato Grosso</th>
          <th>Santa Catarina</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Campinas</td>
          <td>Curitiba</td>
          <td>Cáceres</td>
          <td>Florianópolis</td>
        </tr>
        <tr>
          <td>Santo Andre</td>
          <td>Londrina</td>
          <td>Juina</td>
          <td>Joinville</td>
        </tr>
        <tr>
          <td>Guarulhos</td>
          <td>Maringá</td>
          <td>Diamantino</td>
          <td>Blumenau</td>
        </tr>
        
      </tbody>
    </Table>
    </Container>
    </>
  );
}

export default Propriedades;