function selectionSort(array) {
  /*
   ** Search through the whole array for the smallest element
   ** then swap it with the first element.
   ** Next, search through the whole array (except the first element)
   ** for the smallest, then swap it with the second element.
   ** Continue like this until you have only one element left.
   */

  let sortedArray = [];

  while (array.length > 0) {
    var minimum = Math.min(...array);
    var minimumIndex = array.indexOf(minimum);
    sortedArray.push(minimum);
    array.splice(minimumIndex, 1);
  }

  return sortedArray;
}

module.exports = selectionSort;
