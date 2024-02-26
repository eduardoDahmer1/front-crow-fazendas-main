async function fazendas(req, res) {

  const q = req.query.q;
  const p = req.query.p;

  const options = {
    method: 'get',
    headers: {
      Authorization: `Bearer apanTOmOuTetYrfaRgANtraW`,
    },
  }

  const response = await fetch(`https://goweb.cloudcrow.com.br/?q=${q}&p=${p}`, options);
  const json = await response.json();

  res.json({ ...json })

}

export default fazendas;