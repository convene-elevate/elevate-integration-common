"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseError_1 = require("./errors/baseError");
class IntegrationAdapter {
    constructor(actions) {
        this.actions = actions;
    }
    invoke(event) {
        if (this.actions) {
            const action = this.actions[event.action];
            return action.call(this.actions, event);
        }
        else {
            throw new baseError_1.default('Integration is not initialized');
        }
    }
}
exports.default = IntegrationAdapter;
//# sourceMappingURL=integrationAdapter.js.map