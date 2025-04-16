import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
      type: mongoose.Schema.Types.String,
      required: [true, 'título livro obrigatório'],
    },
    editora: { type: String, required: [true, 'editora obrigatória'] },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'autores',
      required: [true, 'autor(a) é obrigatório(a)'],
    },
  },
  { versionKey: false }
);

const livro = mongoose.model('livros', livroSchema);

export default livro;
