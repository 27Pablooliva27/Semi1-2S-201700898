const express = require("express");
const cors = require("cors");
const app = express();

app.set("port", 8000);

app.use(cors());

app.use(express.json());

app.use(require("./Endpoints/endpoint"));

app.listen(app.get("port"), () => {
  console.log("servidor en puerto:", app.get("port"));
});
