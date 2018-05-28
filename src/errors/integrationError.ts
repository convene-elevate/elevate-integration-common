import BaseError from './baseError';

class IntegrationError extends BaseError {
    public aciton: any;

    constructor(message: string, event: any, innerError: any) {
        super(message, innerError);

        this.aciton = event;
    }
}

export default IntegrationError;
