/*
gets the column sums and return it in an array
data have to be in the form of a 2D array

sample usage:
var data = [['Activity A', '10', '20', '30', '40'], ['Activity B', '50', '60', '70', '80'], ['Activity C', '90', '100', '110', '120']];
var CSum = getTotalPoints(data, 1, 4);
*/
export function getTotalPoints(data, st, ed) {
    var a = [0, 0, 0, 0];
    for (var i = 0; i < data.length; i++)
        for (var j = st; j <= ed; j++)
            a[j - 1] += parseInt(data[i][j]);
    return a;
}

/*
gets the order of the columns based on the column sums
CSum is the column sums array

sample usage:
var ord = order(CSum);
*/
export function order(CSum) {
    var ret = [1, 2, 3, 4];
    ret.sort(function (a, b) {
        return CSum[b - 1] - CSum[a - 1] > 0 ? 1 : -1;
    });
    return ret;
}