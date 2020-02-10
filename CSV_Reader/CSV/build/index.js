"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var matches = fs
    .readFileSync(__dirname + "/../football.csv", { encoding: 'utf8' })
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
;
var teamName = 'Chelsea';
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    match[1] === teamName && match[5] === MatchResult.HomeWin ? manUnitedWins += 1 :
        (match[2] === teamName && match[5] === MatchResult.AwayWin ? manUnitedWins += 1 : '');
}
var filterMatch = matches.filter(function (x) { return (x[1] === teamName && x[5] === MatchResult.HomeWin) || (x[2] === teamName && x[5] === MatchResult.AwayWin); });
var firstElement = teamName + " won " + manUnitedWins + " games \n";
var arr = firstElement + filterMatch.join('\n');
var writeMatches = fs.writeFileSync(__dirname + "/../filterMatches.csv", arr, { encoding: 'utf8' });
//# sourceMappingURL=index.js.map