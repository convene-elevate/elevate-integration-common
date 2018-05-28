import BaseError from './errors/baseError';
import IntegrationError from './errors/integrationError';

class IntegrationAdapter {
    private actions: any;

    constructor(actions: any) {
        this.actions = actions;
    }

    async invoke(event: any): Promise<any> {
        if (this.actions) {
            const action = this.actions[event.action];
            if (action) {
                try {
                    return await action.call(this.actions, event);
                } catch (error) {
                    throw new IntegrationError('Integration action error', event, error)
                }
            } else {
                throw new BaseError(`No action ${event.action} found`);
            }
        } else {
            throw new BaseError('Integration is not initialized')
        }
    }
}

export default IntegrationAdapter;
