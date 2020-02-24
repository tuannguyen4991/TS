"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs
            .readFileSync(this.filename, { encoding: 'utf8' })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
//# sourceMappingURL=CsvFileReader.js.map