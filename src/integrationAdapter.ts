import BaseError from './errors/baseError';
import ExpectedError from './errors/expectedError';
import IntegrationError from './errors/integrationError';

class IntegrationAdapter {
    private actions: any;

    constructor(actions: any) {
        this.actions = actions;
    }

    async invoke(event: any): Promise<any> {
        if (!this.actions) {
            throw new BaseError('Integration is not initialized')
        }

        const action = this.actions[event.action];
        if (!action) {
            throw new BaseError(`No action ${event.action} found`);
        }

        try {
            return await action.call(this.actions, event);
        } catch (error) {
            if (error instanceof ExpectedError) {
                throw error;
            } else {
                throw new IntegrationError('Integration action error', event, error);
            }
        }
    }
}

export default IntegrationAdapter;
