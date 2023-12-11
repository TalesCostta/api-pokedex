class TreeNode {
  constructor(pokemon) {
    this.pokemon = pokemon;
    this.left = null;
    this.right = null;
  }
}

function insertNode(root, newNode) {
  if (newNode.pokemon.id < root.pokemon.id) {
    if (root.left === null) {
      root.left = newNode;
    } else {
      insertNode(root.left, newNode);
    }
  } else {
    if (root.right === null) {
      root.right = newNode;
    } else {
      insertNode(root.right, newNode);
    }
  }
}

function inOrderTraversal(root, callback) {
  if (root !== null) {
    inOrderTraversal(root.left, callback);
    callback(root.pokemon);
    inOrderTraversal(root.right, callback);
  }
}

module.exports = {
  TreeNode,
  insertNode,
  inOrderTraversal,
};
