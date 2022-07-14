// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix == null || matrix.length <= 0) {
        return [];
    }

    let arraySort = [];
    matrix.forEach((element, index) => {
      let item = [];
      if(index %2 === 0) {
        item = element;
      }
      else item = element.sort((a, b) => b - a); 
      arraySort.push(...item);
    });
    return arraySort;
  }
