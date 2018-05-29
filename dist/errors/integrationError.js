"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseError_1 = require("./baseError");
class IntegrationError extends baseError_1.default {
    constructor(message, event, innerError) {
        super(message, innerError);
        this.event = event;
    }
}
exports.default = IntegrationError;
//# sourceMappingURL=integrationError.js.map