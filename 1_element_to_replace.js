// Give an array of integers, replace all the occurrences of elementToReplace with subtractionElem.

/**
 * @EXAMPLE
 */
// for inputArray = [1,2,1]
// elementToReplace = 1 and
// subtractionElem = 3

// the output should be arrayReplace(inputArray, elementToReplace, substractionElem) = [3,2,3]

function arrayReplace(inputArray, elementToReplace, substractionElem) {
  inputArray.map((item, index) => {
    if (item === elementToReplace) {
      inputArray[index] = substractionElem;
    }
  });

  console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);
