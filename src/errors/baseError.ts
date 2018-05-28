class BaseError extends Error {
    public innerError: Error;

    constructor(message: string, innerError?: any) {
        super(message);

        this.name = this.constructor.name;
        this.innerError = innerError;
    }

}

export default BaseError;
