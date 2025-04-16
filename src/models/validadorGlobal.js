import mongoose from 'mongoose';

mongoose.Schema.Types.String.set('validate', {
  validator: (valor) => {
    return typeof valor === 'string' && valor.trim().length > 0;
  },
  message: ({ path }) => `campo ${path} não pode estar vazio`,
});
