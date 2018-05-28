import BaseError from './errors/baseError';

class IntegrationAdapter {
    private actions: any;

    constructor(actions: any) {
        this.actions = actions;
    }

    invoke(event: any) {
        if (this.actions) {
            const action = this.actions[event.action];
            return action.call(this.actions, event);
        } else {
            throw new BaseError('Integration is not initialized')
        }
    }
}

export default IntegrationAdapter;
