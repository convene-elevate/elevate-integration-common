declare class IntegrationAdapter {
    private actions;
    constructor(actions: any);
    invoke(event: any): Promise<any>;
}
export default IntegrationAdapter;
