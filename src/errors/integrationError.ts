import BaseError from './baseError';

class IntegrationError extends BaseError {
    public event: any;

    constructor(message: string, event: any, innerError: any) {
        super(message, innerError);

        this.event = event;
    }
}

export default IntegrationError;
