import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

const app = express();
app.use(express.json());

routes(app);

db.on("error", console.log.bind("Erro de conexão"));
db.once("open", ()=>{
    console.log("A conexão com o banco de dados foi estabelecida com sucesso!")
});


export default app;