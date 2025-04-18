import { autor } from '../models/index.js';
import { livro } from '../models/index.js';
import Erro404 from '../errors/Erro404.js';

class LivroController {
  static async listarLivros(req, res, next) {
    try {
      const buscaLivros = livro.find();
      req.resultado = buscaLivros;
      next();
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
        return next(new Erro404('ID não fornecido'));
      }

      const livroDeletado = await livro.findByIdAndDelete(id);

      if (!livroDeletado) {
        return next(new Erro404('livro não localizado por este ID'));
      }

      res.status(200).json({ message: 'Livro excluído com sucesso!' });
    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorFiltro(req, res, next) {
    try {
      const { editora, titulo, nomeAutor } = req.query;
      const busca = {};

      if (editora) busca.editora = editora;
      if (titulo) busca.titulo = { $regex: titulo, $options: 'i' };
      if (nomeAutor) {
        const autorEncontrado = await autor.findOne({ nome: nomeAutor });
        if (!autorEncontrado) {
          return next(new Erro404('autor não encontrado'));
        }
        busca.autor = autorEncontrado._id;
      }

      const livrosResultado = livro.find(busca);

      req.resultado = livrosResultado;

      next();
    } catch (error) {
      next(error);
    }
  }
}

export default LivroController;
