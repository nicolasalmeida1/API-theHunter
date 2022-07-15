import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://nicolas:teste123@cluster0.3khsz.mongodb.net/avanade-node?");

let db = mongoose.connection;

export default db;