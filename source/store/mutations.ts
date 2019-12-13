// mutation定义
import state from './state';
import { IState, IUser } from '../interface/IDataInterface';
import { MutationTree } from 'vuex';
const mutations: MutationTree<IState> = {
    SET_G_USET(state: IState, data: IUser) {
        state.user = data;
    },
    SET_G_PROFILE(state: IState, data: string) {
        state.profile = data;
    },
    SET_G_PERMITLIST(state: IState, data: Array<string>) {
        state.permitList = data;
    },
    SET_G_PERLIST(state: IState, data: Array<IUser>) {
        state.perList = data;
    },
    SET_G_COMPONYDATA(state: IState, data: Array<any>) {
        state.companyData = data;
    },
};
export default mutations;
