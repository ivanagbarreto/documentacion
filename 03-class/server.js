const express = require("express");
const helloRouter = require("./hello.routes");
const usersRouter = require("./users.routes")

const app = express();

app.use("/",helloRouter);
app.use("/",usersRouter)

app.listen(3000, () => {
  console.log("server started");
});
