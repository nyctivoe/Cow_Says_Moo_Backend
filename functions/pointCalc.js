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

// -------------------------------------------------------------------------------------------------------- //

/*
this collects all data Mr. Jones has for an event and output it as am event object
More could be added to the Event class.

Individual Event objects should be created for events.
*/
export class Event {
    constructor(data) {
        this.name = data[0];
        this.score = data.slice(1, 5);
        for (var i = 0; i < 4; i++)
            this.score[i] = parseInt(this.score[i]);
        if (data.length > 5)
            this.desc = data[5];
        else
            this.desc = '';
        this.ord = order(this.score);
    }
    updateDescription(newDesc) { this.desc = newDesc; }

    getName() { return this.name; }
    getScore() { return this.score; }
    getOrder() { return this.ord; }
    getDescription() { return this.desc; }
    getWinner() {
        if (this.ord[0] >= 1 && this.ord[0] <= 4)
            return houseNames[this.ord[0] - 1];
        throw 'Error: Invalid Order';
    }
}
export function getEvent(Rdata) { return new Event(Rdata); }

// -------------------------------------------------------------------------------------------------------- //

export const houseNames = ['Albemarle', 'Ettl', 'Hobler', 'Lambert'];
/*
This is the House class for the house objects. Individual house objects should be created for each house, and displayed
accordingly on the house details page.
*/
export class House {
    constructor(_name, _points, _rk) {
        this.name = _name;
        this.points = _points;
        this.rk = _rk;
    }
    output() {
        return this.name + ' have ' + this.points + ' points, and it currently ranked ' + this.rk + '.';
    }
    addPoints(pointsEarned) { this.points += pointsEarned; }

    // Access functions
    getName() { return this.name; }
    getPoints() { return this.points; }
    getRank() { return this.rk; }
}

/*
This function recalculates the order of the houses based on the points they have.
*/
export function redoRank(houses) {
    var poi = [houses[0].getPoints(), houses[1].getPoints(), houses[2].getPoints(), houses[3].getPoints()];
    var ord = order(poi);
    for (var i = 0; i < 4; i++)
        houses[ord[i] - 1].rk = i + 1;
    return houses;
}

