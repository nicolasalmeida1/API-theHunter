import RecordController from "../controllers/recordsController.js";
import express from "express";

const router = express.Router();

router
    .get('/records', RecordController.listarRecords)
    .get('/record/:id', RecordController.obterRecordPorId)
    .post('/cadastrar-record', RecordController.inserirRecord)
    .put('/atualizar-record/:id', RecordController.atualizarRecord)
    .delete('/remover-record/:id', RecordController.removerRecord)

export default router;