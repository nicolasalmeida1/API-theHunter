import express from "express";
import HunterController from "../controllers/huntersController.js";

const routerHunter = express.Router();

routerHunter
    .get('/hunters', HunterController.listarHunters)
    .get('/hunter/:id', HunterController.obterHunterPorId)
    .post('/cadastrar-hunter', HunterController.inserirHunter)
    .put('/atualizar-hunter/:id', HunterController.atualizarHunter)
    .delete('/remover-hunter/:id', HunterController.removerHunter)

export default routerHunter;