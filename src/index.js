
// You should implement your task here.
module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix === undefined) {
        return result;
    } else {
        matrix.forEach((element, index) => {
            if (index % 2 === 0) {
                element.forEach(element2 => {
                    result.push(element2);
                });
            } else {
                element.reverse().forEach(element2 => {
                    result.push(element2);
                });
            }
        });
    }
  return result;
}
