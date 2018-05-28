declare class BaseError extends Error {
    innerError: Error;
    constructor(message: string, innerError?: any);
}
export default BaseError;
