const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('¡El servidor del backend está funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
