function bubbleSort(inputArray) {
  // array to hold each step of the sort
  let outputLog = [];

  outputLog.push({
    message: "Sorting array using Bubble Sort"
  });

  // loop over the array
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length - i - 1; j++) {
      // add comparison operation to output log
      outputLog.push({
        type: operations.compare,
        left: j,
        right: j + 1,
        message:
          "compare " +
          inputArray[j] +
          " at index " +
          j +
          " with " +
          inputArray[j + 1] +
          " at index " +
          (j + 1)
      });

      // compare two elements and check if the first one is greater
      if (inputArray[j] > inputArray[j + 1]) {
        // add swap operation to output log
        outputLog.push({
          type: operations.swap,
          left: j,
          right: j + 1,
          message:
            "swap " +
            inputArray[j] +
            " at index " +
            j +
            " with " +
            inputArray[j + 1] +
            " at index " +
            (j + 1)
        });

        // make the acutal swap
        swap(inputArray, j, j + 1);
      }
    }
  }

  outputLog.push({
    message: "Bubble Sort completed successfully, array is sorted"
  });
  return outputLog;
}

function insertionSort(inputArray) {
  // array to hold each step of the sort
  outputLog = [];

  outputLog.push({
    message: "Sorting array using Insertion Sort"
  });

  // loop over the array
  for (let i = 1; i < inputArray.length; i++) {
    for (let j = i; j > 0; j--) {
      // add comparison operation to output log
      outputLog.push({
        type: operations.compare,
        left: j - 1,
        right: j,
        message:
          "compare " +
          inputArray[j - 1] +
          " at index " +
          (j - 1) +
          " with " +
          inputArray[j] +
          " at index " +
          j
      });

      // compare two elements and check if the first one is greater
      if (inputArray[j] < inputArray[j - 1]) {
        // add swap operation to output log
        outputLog.push({
          type: operations.swap,
          left: j - 1,
          right: j,
          message:
            "swap " +
            inputArray[j - 1] +
            " at index " +
            (j - 1) +
            " with " +
            inputArray[j] +
            " at index " +
            j
        });

        // make the acutal swap
        swap(inputArray, j, j - 1);
      } else break;
    }
  }

  outputLog.push({
    message: "Insertion Sort completed successfully, array is sorted"
  });
  return outputLog;
}

function selectionSort(inputArray) {
  // array to hold each step of the sort
  outputLog = [];

  outputLog.push({
    message: "Sorting array using Selection Sort"
  });

  // loop over the array
  for (let i = 0; i < inputArray.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < inputArray.length; j++) {
      // add comparison operation to output log
      outputLog.push({
        type: operations.compare,
        left: min,
        right: j,
        message:
          "compare " +
          inputArray[min] +
          " at index " +
          min +
          " with " +
          inputArray[j] +
          " at index " +
          j
      });

      // compare two elements and check if the first one is greater
      if (inputArray[j] < inputArray[min]) {
        // change the min var
        min = j;

        outputLog.push({
          type: operations.select,
          left: min,
          right: -1,
          message: "select element at " + min + " as minimum"
        });
      }
    }

    // add swap operation to output log
    outputLog.push({
      type: operations.swap,
      left: i,
      right: min,
      message:
        "swap " +
        inputArray[min] +
        " at index " +
        min +
        " with " +
        inputArray[i] +
        " at index " +
        i
    });

    // make the acutal swap
    swap(inputArray, i, min);
  }

  outputLog.push({
    message: "Selection Sort completed successfully, array is sorted"
  });
  return outputLog;
}