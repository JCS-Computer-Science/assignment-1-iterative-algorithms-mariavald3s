function insertionSort(array) {
  /*
   ** For each element in the array, swap it with the element
   ** before it over and over as long as the element before it
   ** is bigger
   */

  for (var i = 0; i < array.length; i++) {
    let current = array[i];

    let iOneLess;

    for (
      iOneLess = i - 1;
      iOneLess >= 0 && array[iOneLess] > current;
      iOneLess--
    ) {
      array[iOneLess + 1] = array[iOneLess];
    }
    array[iOneLess + 1] = current;
  }

  return array;
}

module.exports = insertionSort;
