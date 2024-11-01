require('dotenv').config();

const express = require('express');
const mysql = require('mysql'); // ou qualquer outro cliente de banco de dados que você esteja usando
const app = express();
const PORT = 3000;

// Acesse as variáveis de ambiente
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Exemplo de conexão ao banco de dados
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Olá para Node.js API!' });
});

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});
