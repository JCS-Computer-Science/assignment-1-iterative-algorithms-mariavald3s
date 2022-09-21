function bubbleSort(array) {
  /*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

  let sortedArray = [];

  for (var i = 0; i < array.length; i++) {

    let current = array[i];
    let secondIndex;
    for(secondIndex = i + 1; secondIndex < (array.length - i - 1); secondIndex++) {
    if (array[secondIndex] > array[secondIndex + 1]) {
      array[secondIndex + 1] = array[secondIndex];
      // array.splice( i, 1, current);
      // array.splice(i + 1, 0, array[i + 1]);
    }
    }
  }

      //for i -> 0  to array length
        // for j -> 0  to (arrayLenfth - i - 1)
        // if array[j] > array [j + 1]
          //swap (array[j], array[j+ 1])


  // for (var i = 0; i < array.length; i++) {
  //   // for (var insideIndex = 0; insideIndex < (array.length - insideIndex - 1); insideIndex++) {
  //   //   if (array[insideIndex] > array[insideIndex + 1]){
  //   //     sortedArray.splice(insideIndex, 1, array[insideIndex + 1]);
  //   //     sortedArray.splice(insideIndex + 1, 0, array[insideIndex]);
  //   //     console.log(sortedArray)
  //   //   }
  //   //   if (array[insideIndex] < array[insideIndex + 1]){
  //   //     sortedArray.splice(insideIndex, 1, array[insideIndex]);
  //   //     sortedArray.splice(insideIndex + 1, 0, array[insideIndex + 1]);
  //   //     console.log(sortedArray)
  //   //   }

  // }
  

// }


  return array;
}

module.exports = bubbleSort;
