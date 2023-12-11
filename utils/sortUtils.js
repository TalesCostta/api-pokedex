function compareEnglishNames(a, b) {
  const nameA = a.name.english.toLowerCase();
  const nameB = b.name.english.toLowerCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
}

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    compareEnglishNames(array[i], pivot) === -1 ? left.push(array[i]) : right.push(array[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

module.exports = {
  quickSort,
};
