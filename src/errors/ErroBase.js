class ErroBase extends Error {
  constructor(mensagemDeErro = 'erro interno de servidor', status = 500) {
    super();
    this.message = mensagemDeErro;
    this.status = status;
  }

  enviarResposta(res) {
    res
      .status(this.status)
      .json({ message: this.message, status: this.status });
  }
}

export default ErroBase;
