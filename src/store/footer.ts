export const footerModule = {
    namespaced:true,
    state: () => ({ display: true }),
    mutations: {
        hidden(state: any) {
            state.display = false;
        },
        show(state: any) {
            state.display = true;
        }
    },
    actions: {
        hidden(context:any):void{
            context.commit("hidden");
        },
        show(context:any):void{
            context.commit("show");
        }
    }
}