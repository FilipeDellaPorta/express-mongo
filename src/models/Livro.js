import mongoose from 'mongoose';
import { autorSchema } from './Autor.js';

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
      type: mongoose.Schema.Types.String,
      required: [true, 'título livro obrigatório'],
    },
    editora: { type: String },
    preco: { type: mongoose.Schema.Types.Number },
    paginas: { type: Number },
    autor: { autorSchema, required: [true, 'id autor(a) obrigatório'] },
  },
  { versionKey: false }
);

const livro = mongoose.model('livros', livroSchema);

export default livro;
