'use strict';

class IntegrationAdapter {
    constructor(integration) {
        this.integration = integration;
    }

    invoke(event) {
        if (this.integration) {
            const action = this.integration[event.action];
            return action.call(this.integration, event);
        } else {
            throw new Error('Integration is not set');
        }
    }
}

module.exports = IntegrationAdapter;
