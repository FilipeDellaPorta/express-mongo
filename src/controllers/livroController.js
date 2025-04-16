import { autor } from '../models/index.js';
import { livro } from '../models/index.js';
import Erro404 from '../errors/Erro404.js';

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
        next(new Erro404('livro não localizado por este ID'));
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
        next(
          new Erro404(
            'para criar um livro é necessário o ID de um autor já existente'
          )
        );
      }
      const livroCriado = await livro.create(novoLivro);
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
      if (!id) {
        next(new Erro404('livro não localizado por este ID'));
      }
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Livro atualizado!' });
    } catch (error) {
      next(error);
    }
  }

  static async deletarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      if (!id) {
        next(new Erro404('livro não localizado por este ID'));
      }
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: 'Livro excluído com sucesso!' });
    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorEditora(req, res, next) {
    const editora = req.query.editora;
    try {
      if (!editora) {
        next(new Erro404('livro não localizado por esta editora'));
      }
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch (error) {
      next(error);
    }
  }
}

export default LivroController;
