"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseError extends Error {
    constructor(message, innerError) {
        super(message);
        this.name = this.constructor.name;
        this.innerError = innerError;
    }
}
exports.default = BaseError;
//# sourceMappingURL=baseError.js.map