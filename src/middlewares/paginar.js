import RequisicaoIncorreta from '../errors/RequisicaoIncorreta.js';

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
      res.status(200).json(resultadoPaginado);
    } else {
      next(new RequisicaoIncorreta());
    }
  } catch (error) {
    next(error);
  }
}

export default paginar;
