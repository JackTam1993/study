/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let total = 0;

    for(let i = 1; i < points.length; i++) {
        const start = points[i - 1];
        const end = points[i];

        total += Math.max(Math.abs(end[0] - start[0]), Math.abs(end[1] - start[1]))
    }

    return total;
};