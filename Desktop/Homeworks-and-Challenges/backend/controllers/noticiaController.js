const Noticia = require('../models/Noticia');
const Categoria = require('../models/Categoria');

// Obtener todas las noticias
exports.getNoticias = async (req, res) => {
    try {
        const noticias = await Noticia.find().populate('categoria');
        res.json(noticias);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear una nueva noticia
exports.createNoticia = async (req, res) => {
    const { titulo, descripcion, categoriaId } = req.body;
    const nuevaNoticia = new Noticia({ titulo, descripcion, categoria: categoriaId });

    try {
        const noticiaGuardada = await nuevaNoticia.save();

        // Agregar noticia a la categoría
        const categoria = await Categoria.findById(categoriaId);
        categoria.noticias.push(noticiaGuardada._id);
        await categoria.save();

        res.status(201).json(noticiaGuardada);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Actualizar una noticia
exports.updateNoticia = async (req, res) => {
    try {
        const noticia = await Noticia.findById(req.params.id);
        if (!noticia) return res.status(404).json({ message: 'Noticia no encontrada' });

        noticia.titulo = req.body.titulo || noticia.titulo;
        noticia.descripcion = req.body.descripcion || noticia.descripcion;
        const noticiaActualizada = await noticia.save();
        res.json(noticiaActualizada);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar una noticia
exports.deleteNoticia = async (req, res) => {
    try {
        const noticia = await Noticia.findById(req.params.id);
        if (!noticia) return res.status(404).json({ message: 'Noticia no encontrada' });

        await noticia.remove();
        res.json({ message: 'Noticia eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
