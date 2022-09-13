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
    if (array[i] > array[i + 1]) {
    //   sortedArray.splice(i, 0 ,array[i]);
    //   console.log(sortedArray);
      if (i == 0) {
          sortedArray.splice(i, 0 ,array[i]);
          console.log(sortedArray);
          
      } else {
      sortedArray.splice((i + 1), 0 ,array[i]);
      sortedArray.splice((i), 0 ,array[i + 1]);
      console.log(sortedArray);
    } }
    else if (array[i] < array[i + 1]) {
        if (i == 0) {
            sortedArray.splice(i, 0 ,array[i]);
            console.log(sortedArray);
            
        } else {
        sortedArray.splice((i - 1), 0 ,array[i]);
        console.log(sortedArray);
    }
    } 
    else if (array[i] == array[i + 1]) {
        sortedArray.splice(i, 0 ,array[i]);
        console.log(sortedArray);
    } 
  }


  return sortedArray;
}

module.exports = bubbleSort;
