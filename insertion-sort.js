function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	const arrayOGLength = array.length - 1;

	for (var i = 0 ; i <= arrayOGLength; i++) {
		if (array[i] > array[i + 1]) {
			// array.splice(i, 0, array[i + 1]);
			// array.splice(i + 1, 1, array[i + 1]);
			console.log("higher");
		} else if (array[i] < array[i + 1]){
			console.log("lower");
		} else if (array[i] == array[i + 1]) {
			console.log("equal");
		}
	}

	return array;
}

module.exports = insertionSort;
