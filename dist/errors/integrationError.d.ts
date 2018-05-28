import BaseError from './baseError';
declare class IntegrationError extends BaseError {
    aciton: any;
    constructor(message: string, event: any, innerError: any);
}
export default IntegrationError;
