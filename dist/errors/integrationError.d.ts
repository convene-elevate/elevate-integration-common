import BaseError from './baseError';
declare class IntegrationError extends BaseError {
    event: any;
    constructor(message: string, event: any, innerError: any);
}
export default IntegrationError;
