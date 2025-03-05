function getArrayParams(...arr) {

  function min(arr){
    return Math.min(...arr);
    }
  function max(arr){
    return Math.max(...arr);
    }
  function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum +=arr[i];
    }
    return sum;
  }
  function avg(arr){
    let avg = sum(arr) / arr.length;
    
        return +avg.toFixed(2);
      }
     
  return { min: min(arr), max: max(arr), avg: avg(arr) };
}
getArrayParams(1, 2, 3, -100, 10)

function summElementsWorker(...arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  summElementsWorker(0, 0, 0, -1, -100)

  
  function differenceMaxMinWorker(...arr) {
  return (Math.max(...arr) - Math.min(...arr));
  }
  differenceMaxMinWorker(0, 0, 0, -1, -100 )

  function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i=0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
        sumEvenElement += arr[i];
    }
    else {
      sumOddElement += arr[i];
    }
   }
    return sumEvenElement - sumOddElement;
  }

 differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)
  
  function averageEvenElementsWorker(...arr) {
      let sumEvenElement = 0;
      let countEvenElement = 0;
    
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 0) {
              sumEvenElement += arr[i];
              countEvenElement++;
          }
      }
    
        if (countEvenElement === 0) {
          return 0; 
      }
    
       return sumEvenElement / countEvenElement;
    }
    
    averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);
    

    function makeWork (arrOfArr, func) {
      let maxWorkerResult = -Infinity;
    
      for (let i = 0; i < arrOfArr.length; i++) {
        const result = func(...arrOfArr[i]);
        if (result > maxWorkerResult) {
          maxWorkerResult = result;
        }
        if (makeWork === 0) {
          return 0; 
      }
      }
    
      return maxWorkerResult;
    }
    const arr = [[0]];
    makeWork(arr, averageEvenElementsWorker)


