const express = require("express");
const router = express.Router();

router.get("/check", (req, res) => {
  res.status(200).send("OK");
});

//Endpoint de Usuarios
router.get("/", (req, res) => {
  return res.status(200).json({
    Instancia: "Instancia #1 - API #1",
    Curso: "Seminario de Sistemas 1",
    Estudiante: "Pablo José Oliva Bonilla - 201700898",
  });
});

module.exports = router;
