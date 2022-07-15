import mongoose from 'mongoose';
import hunterCadastrado from './Hunter.js';

const recordSchema = new mongoose.Schema({
    id: {type: String},
    hunter: {type: mongoose.Schema.Types.ObjectId, ref: 'hunters', required: true},
    animal: {type: String, required: true},
    distancia: {type: Number, required: true},
})

const recordsRegistrados = mongoose.model('records', recordSchema);

export default recordsRegistrados;