# 📚 Express-Mongo

Este projeto foi desenvolvido como parte de uma formação da **Alura**. O objetivo foi criar uma API utilizando **Node.js**, **Express** e **MongoDB** para gerenciar o CRUD (Create, Read, Update, Delete) de uma livraria fictícia. A API permite realizar operações básicas de cadastro, listagem, atualização e exclusão de livros.

---

## 🚀 Tecnologias Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
- ![Express](https://img.shields.io/badge/Express-000?style=flat-square&logo=express&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white)

---

## 📝 Funcionalidades

A API implementa as seguintes funcionalidades:

- **Criar livro**: Adiciona um novo livro à livraria.
- **Listar livros**: Exibe uma lista com todos os livros cadastrados.
- **Atualizar livro**: Modifica os dados de um livro existente.
- **Excluir livro**: Remove um livro da livraria.

---

## 🧭 Como Usar

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/express-mongo.git
    ```

2. Instale as dependências:
    ```bash
    cd express-mongo
    npm install
    ```

3. **Crie um cluster no MongoDB Atlas** (ou use uma instância local do MongoDB):
   - Vá até [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) e crie uma conta, caso ainda não tenha.
   - Crie um novo cluster e obtenha a **string de conexão** para o banco de dados.
   - Lembre-se de adicionar um usuário com permissões para acesso ao banco de dados e configure as permissões de IP para permitir o acesso de sua máquina.

4. Atualize a string de conexão no arquivo `config/db.js` com a string fornecida pelo MongoDB Atlas ou pela sua instância local.

5. Inicie o servidor:
    ```bash
    npm start
    ```

    A API estará rodando em `http://localhost:3000`.

---
