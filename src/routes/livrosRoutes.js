import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get('/livros', LivroController.listarLivros);
routes.get('/livros/busca', LivroController.listarLivrosPorEditora);
routes.get('/livros/:id', LivroController.listarLivroPorId);
/*
routes.post('/livros', LivroController.criarLivro);
routes.put('/livros/:id', LivroController.editarLivroPorId);
routes.delete('/livros/:id', LivroController.deletarLivroPorId); 
*/

export default routes;
