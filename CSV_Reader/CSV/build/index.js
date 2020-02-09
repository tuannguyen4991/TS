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
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    match[1] === 'Man United' && match[5] === MatchResult.HomeWin ? manUnitedWins += 1 :
        (match[2] === 'Man United' && match[5] === MatchResult.AwayWin ? manUnitedWins += 1 : '');
}
console.log("Man United won " + manUnitedWins + " games");
//# sourceMappingURL=index.js.map