const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
    titulo: { type: String, required: true },
    noticias: [{ type: Schema.Types.ObjectId, ref: 'Noticia' }]
});

module.exports = mongoose.model('Categoria', CategoriaSchema);


