import autor from '../models/Autor.js';

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao listar autores` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao listar autor` });
    }
  }

  static async criarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ message: 'Autor cadastrado com sucesso!', autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar autor` });
    }
  }

  static async editarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Autor atualizado!' });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao listar autor` });
    }
  }

  static async deletarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: 'Autor excluído com sucesso!' });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao deletar autor` });
    }
  }
}

export default AutorController;