const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("¡Hola desde la página principal!");
});
router.get("/cursos", (req, res) => {
  const tema = req.query.tema;
  res.send(`Estás viendo cursos sobre el tema: ${tema}`);
});

router.get("/cursos/:id", (req, res) => {
  const idCurso = req.params.id;
  res.send(`Estás viendo el curso con ID: ${idCurso}`);
});

module.exports = router;
