
var MyCalendarThree = function () {
    this.intervals = {};
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
    this.intervals[start] = (this.intervals[start]) ? (this.intervals[start] + 1) : 1;
    this.intervals[end] = (this.intervals[end]) ? (this.intervals[end] - 1) : -1;

    let currentOverlaps = 0;
    let maxOverlaps = 0;

    for (let eventValue of Object.values(this.intervals)) {
        currentOverlaps += eventValue;
        maxOverlaps = Math.max(maxOverlaps, currentOverlaps);
    }
    return maxOverlaps;
};
