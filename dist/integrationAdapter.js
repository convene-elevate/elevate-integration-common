"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseError_1 = require("./errors/baseError");
const integrationError_1 = require("./errors/integrationError");
class IntegrationAdapter {
    constructor(actions) {
        this.actions = actions;
    }
    invoke(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.actions) {
                const action = this.actions[event.action];
                if (action) {
                    try {
                        return yield action.call(this.actions, event);
                    }
                    catch (error) {
                        throw new integrationError_1.default('Integration action error', event, error);
                    }
                }
                else {
                    throw new baseError_1.default(`No action ${event.action} found`);
                }
            }
            else {
                throw new baseError_1.default('Integration is not initialized');
            }
        });
    }
}
exports.default = IntegrationAdapter;
//# sourceMappingURL=integrationAdapter.js.map