import records from "../app.js";
import recordsRegistrados from "../models/Record.js";

class RecordController{
    static listarRecords = (req, res) => {
        recordsRegistrados.find().populate('hunter').exec((err, records) => {
            res.status(200).send(records);
        })
    }

    static obterRecordPorId = (req, res) => {
        const id = req.params.id;
        recordsRegistrados.findById(id).populate('hunter').exec((err, records) => {
            if(err){
                res.status(500).send({message: `Não foi possível localizar um record com esse ID ${err.message}`});
            }else{
                res.status(200).send(records)
            }
        })
    }

    static inserirRecord = (req, res) => {
        let record = new recordsRegistrados(req.body);

        record.save((err) =>{
            if(err){
                res.status(500).send({message: `Erro ao tentar cadastrar um novo record: ${err.message}`});
            }else{
                res.status(200).send(record.toJSON());
            }
        })
    }

    static atualizarRecord = (req, res) => {
        const id = req.params.id;
        recordsRegistrados.findByIdAndUpdate(id,{$set: req.body} , (err)=>{
            if(err){
                res.status(500).send({message: `Erro ao editar record: ${err.message}`});
            }else{
                res.status(200).send("Record atualizado com sucesso");
            }
        })
    }

    static removerRecord = (req, res) => {
        const id = req.params.id;
        recordsRegistrados.findByIdAndRemove(id, (err, records) => {
            if(err){
                res.status(500).send({message: `Erro ao excluir record: ${err.message}`});
            }else{
                res.status(200).send("record excluido com sucesso");
            }
        })
    }
}

export default RecordController;