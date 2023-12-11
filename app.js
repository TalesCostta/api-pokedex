// app.js
const express = require('express');
const app = express();
const pokemonRoutes = require('./routes/pokemonRoutes');

// Defina uma rota padrão para evitar o erro "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Seja bem-vindo à API de Pokémons!');
});

app.use('/pokemons', pokemonRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
