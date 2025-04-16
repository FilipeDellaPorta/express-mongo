import RequisicaoIncorreta from './RequisicaoIncorreta.js';

class ErroValidaco extends RequisicaoIncorreta {
  constructor(error) {
    const mensagensErro = Object.values(error.errors)
      .map((error) => error.message)
      .join('; ');

    super(`os seguintes erros foram encontrados: ${mensagensErro}`);
  }
}

export default ErroValidaco;
