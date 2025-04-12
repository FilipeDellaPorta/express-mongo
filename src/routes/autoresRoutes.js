import express from 'express';
import AutorController from '../controllers/autorController.js';

const routes = express.Router();

routes.get('/autores', AutorController.listarAutores);
routes.get('/autores/:id', AutorController.listarAutorPorId);
/*
routes.post('/autores', AutorController.criarAutor);
routes.put('/autores/:id', AutorController.editarAutorPorId);
routes.delete('/autores/:id', AutorController.deletarAutorPorId);
*/

export default routes;
