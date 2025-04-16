import mongoose from 'mongoose';

function manipuladorDeErros(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: 'um ou mais dados estão incorretos' });
  } else if (error instanceof mongoose.Error.ValidationError) {
    const mensagensErro = Object.values(error.errors)
      .map((error) => error.message)
      .join('; ');
    res
      .status(400)
      .json({
        message: `os seguintes erros foram encontrados: ${mensagensErro}`,
      });
  } else {
    res.status(500).json({ message: 'erro interno de servidor' });
  }
}

export default manipuladorDeErros;
