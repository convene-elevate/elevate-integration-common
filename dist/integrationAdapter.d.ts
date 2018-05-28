declare class IntegrationAdapter {
    private actions;
    constructor(actions: any);
    invoke(event: any): any;
}
export default IntegrationAdapter;
