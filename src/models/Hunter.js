import mongoose from "mongoose";

const hunterSchema = new mongoose.Schema({
    id: { type: String},
    hunter: { type: String, required: true},
    naturalidade: { type: String, required: true}
})

const huntersRegistrados = mongoose.model('hunters', hunterSchema);

export default huntersRegistrados;