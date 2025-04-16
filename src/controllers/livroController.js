import mongoose from 'mongoose';
import { autor } from '../models/Autor.js';
import livro from '../models/Livro.js';

class LivroController {
  static async listarLivros(req, res, next) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      next(error);
    }
  }

  static async listarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      if (livroEncontrado) {
        res.status(200).json(livroEncontrado);
      } else {
        res.status(404).json({ message: 'livro não localizado por este ID' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async criarLivro(req, res, next) {
    try {
      const novoLivro = req.body;
      const autorEncontrado = await autor.findById(novoLivro.autor);
      if (!autorEncontrado) {
        throw new mongoose.Error.CastError(
          'ObjectId',
          novoLivro.autor,
          'autor'
        );
      }
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({
        message: 'Livro cadastrado com sucesso!',
        livro: livroCriado,
      });
    } catch (error) {
      next(error);
    }
  }

  static async editarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Livro atualizado!' });
    } catch (error) {
      next(error);
    }
  }

  static async deletarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: 'Livro excluído com sucesso!' });
    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorEditora(req, res, next) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch (error) {
      next(error);
    }
  }
}

export default LivroController;
