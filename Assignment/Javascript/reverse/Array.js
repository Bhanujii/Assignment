function selectionSortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let maxIndex = i;
      
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[maxIndex]) {
          maxIndex = j;
        }
      }
  
      if (maxIndex !== i) {
       
        const temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = temp;
      }
    }
  }
  
  const numbers = [5,6,67,34,75,25];
  selectionSortDescending(numbers);
  console.log(numbers);
  