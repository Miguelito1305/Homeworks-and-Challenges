const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' }
});

module.exports = mongoose.model('Noticia', NoticiaSchema);
