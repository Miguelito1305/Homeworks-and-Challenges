const express = require('express');
const router = express.Router();
const noticiaController = require('../controllers/noticiaController');

router.get('/', noticiaController.getNoticias);
router.post('/', noticiaController.createNoticia);
router.put('/:id', noticiaController.updateNoticia);
router.delete('/:id', noticiaController.deleteNoticia);

module.exports = router;
