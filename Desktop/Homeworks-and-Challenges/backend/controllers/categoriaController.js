const Categoria = require('../models/Categoria');

// Obtener todas las categorías
exports.getCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find().populate('noticias');
        res.json(categorias);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear una nueva categoría
exports.createCategoria = async (req, res) => {
    const { titulo } = req.body;
    const nuevaCategoria = new Categoria({ titulo });

    try {
        const categoriaGuardada = await nuevaCategoria.save();
        res.status(201).json(categoriaGuardada);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Actualizar una categoría
exports.updateCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id);
        if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });

        categoria.titulo = req.body.titulo || categoria.titulo;
        const categoriaActualizada = await categoria.save();
        res.json(categoriaActualizada);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar una categoría
exports.deleteCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id);
        if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });

        await categoria.remove();
        res.json({ message: 'Categoría eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

