import huntersRegistrados from "../models/Hunter.js";

class HunterController{
    static listarHunters = (req, res) => {
        huntersRegistrados.find((err, hunters) => {
            res.status(200).send(hunters);
        })
    }

    static obterHunterPorId = (req, res) => {
        const id = req.params.id;
        huntersRegistrados.findById(id, (err, hunters) => {
            if(err){
                res.status(500).send({message: `Não foi possível localizar um hunter com esse ID ${err.message}`});
            }else{
                res.status(200).send(hunters)
            }
        })
    }

    static inserirHunter = (req, res) => {
        let hunter = new huntersRegistrados(req.body);

        hunter.save((err) =>{
            if(err){
                res.status(500).send({message: `Erro ao tentar cadastrar um novo hunter: ${err.message}`});
            }else{
                res.status(200).send(hunter.toJSON());
            }
        })
    }

    static atualizarHunter = (req, res) => {
        const id = req.params.id;
        huntersRegistrados.findByIdAndUpdate(id,{$set: req.body} , (err)=>{
            if(err){
                res.status(500).send({message: `Erro ao editar hunter: ${err.message}`});
            }else{
                res.status(200).send("hunter atualizado com sucesso");
            }
        })
    }

    static removerHunter = (req, res) => {
        const id = req.params.id;
        huntersRegistrados.findByIdAndRemove(id, (err, hunters) => {
            if(err){
                res.status(500).send({message: `Erro ao excluir hunter: ${err.message}`});
            }else{
                res.status(200).send("hunter excluido com sucesso");
            }
        })
    }
}

export default HunterController;