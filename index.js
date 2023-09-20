const express = require("express");
const mongoose = require("mongoose")

const app = express();
app.use(express.json());
app.use(require("./routes/categories.route"));
app.use(require("./routes/news.route"))

mongoose
  .connect("mongodb+srv://brunsmayer:brunsmayer@cluster0.26hjj67.mongodb.net/")
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(3000, () => console.log("server start"))