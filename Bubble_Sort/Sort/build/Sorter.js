"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var idx = 0; idx < length; idx += 1) {
            for (var jdx = 0; jdx < length - idx - 1; jdx += 1) {
                this.compare(jdx, jdx + 1) ? this.swap(jdx, jdx + 1) : '';
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
//# sourceMappingURL=Sorter.js.map