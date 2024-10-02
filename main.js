// import { queryCells } from './functions/queryCells.js';
import { getTotalPoints, order } from './functions/pointCalc.js';

var data = [['Activity A', '100', '20', '30', '40'], ['Activity B', '50', '60', '70', '80'], ['Activity C', '90', '100', '110', '120']];
// console.log('Fetched Data: \n', data);

var CSum = getTotalPoints(data, 1, 4);
console.log('Column Sums:', CSum);

var ord = order(CSum);
console.log('Order:', ord);