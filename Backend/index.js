const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(express.json()); //body parser
const app = express();

app.use("/api/v1", rootRouter);

app.listen(3000);
