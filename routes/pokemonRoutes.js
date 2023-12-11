// routes/pokemonRoutes.js
const express = require('express');
const router = express.Router();
const pokemons = require('../pokedex.json');
const { TreeNode, insertNode, inOrderTraversal } = require('../utils/binarySearchTree');
const { quickSort } = require('../utils/sortUtils');


router.get('/', (req, res) => { //Utilizando o QuickSort para ordenar os pokemons em ordem alfabética
  const sortedPokemons = quickSort([...pokemons]);
  res.json(sortedPokemons);
});

router.get('/sortedById', (req, res) => { // Utilizando o Binary Search Tree para ordenar os pokemons por id
  const root = new TreeNode(pokemons[0]);
  for (let i = 1; i < pokemons.length; i++) {
    insertNode(root, new TreeNode(pokemons[i]));
  }
  const sortedPokemons = [];
  inOrderTraversal(root, pokemon => sortedPokemons.push(pokemon));
  res.json(sortedPokemons);
});

router.get('/sortedByType', (req, res) => { // Utilizando o Binary Search Tree para ordenar os pokemons por tipo e o QuickSort para ordenar os tipos em ordem alfabética
  const typeTrees = {};
  pokemons.forEach(pokemon => {
    const type = pokemon.type;
    if (!typeTrees[type]) {
      typeTrees[type] = new TreeNode(pokemon);
    } else {
      insertNode(typeTrees[type], new TreeNode(pokemon), 'name');
    }
  });
  const sortedPokemonsByType = [];
  Object.values(typeTrees).forEach(tree => {
    const sortedPokemonsOfType = [];
    inOrderTraversal(tree, pokemon => sortedPokemonsOfType.push(pokemon));
    sortedPokemonsByType.push(...quickSort(sortedPokemonsOfType));
  });

  res.json(sortedPokemonsByType);
});

module.exports = router;
