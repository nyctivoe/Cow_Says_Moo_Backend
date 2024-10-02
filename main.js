// import { queryCells } from './functions/queryCells.js';
import { getTotalPoints, order, getEvent } from './functions/pointCalc.js';

var data = [['Activity A', '100', '20', '30', '40'], ['Activity B', '50', '60', '70', '80'], ['Activity C', '90', '100', '110', '120']];
// console.log('Fetched Data: \n', data);

let ev = getEvent(data[0]);
console.log('Winner:', ev.getWinner());
console.log('Scores:', ev.getScore());