import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: mongoose.Schema.Types.String, required: true },
    editora: { type: String },
    preco: { type: mongoose.Schema.Types.Number },
    paginas: { type: Number },
  },
  { versionKey: false }
);

const livro = mongoose.model('livros', livroSchema);

export default livro;
