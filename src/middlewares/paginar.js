import RequisicaoIncorreta from '../errors/RequisicaoIncorreta.js';
import Erro404 from '../errors/Erro404.js';

async function paginar(req, res, next) {
  try {
    let { limite = 5, pagina = 1, ordenacao = '_id:-1' } = req.query;

    let [ordenarLivrosPor, crescenteOuDecrescente] = ordenacao.split(':');

    limite = parseInt(limite);
    pagina = parseInt(pagina);
    crescenteOuDecrescente = parseInt(crescenteOuDecrescente);

    const resultado = req.resultado;

    if (limite > 0 && pagina > 0) {
      const resultadoPaginado = await resultado
        .find({})
        .sort({ [ordenarLivrosPor]: crescenteOuDecrescente })
        .skip((pagina - 1) * limite)
        .limit(limite);

      if (!resultadoPaginado || resultadoPaginado.length === 0) {
        return next(new Erro404('livro não localizado'));
      }
      res.status(200).json(resultadoPaginado);
    } else {
      next(new RequisicaoIncorreta());
    }
  } catch (error) {
    next(error);
  }
}

export default paginar;
