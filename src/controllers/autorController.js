import Erro404 from '../errors/Erro404.js';
import { autor } from '../models/Autor.js';

class AutorController {
  static async listarAutores(req, res, next) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      next(error);
    }
  }

  static async listarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      if (autorEncontrado) {
        res.status(200).json(autorEncontrado);
      } else {
        next(new Erro404('autor não localizado por este ID'));
      }
    } catch (error) {
      next(error);
    }
  }

  static async criarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ message: 'Autor cadastrado com sucesso!', autor: novoAutor });
    } catch (error) {
      next(error);
    }
  }

  static async editarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      if (!id) {
        next(new Erro404('autor não localizado por este ID'));
      }
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Autor atualizado!' });
    } catch (error) {
      next(error);
    }
  }

  static async deletarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      if (!id) {
        next(new Erro404('autor não localizado por este ID'));
      }
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: 'Autor excluído com sucesso!' });
    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;
