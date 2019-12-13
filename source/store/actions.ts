// action定义
import state from './state';
import { IState, IUser } from '../interface/IDataInterface';
import { ActionTree } from 'vuex';
const actions: ActionTree<IState, any> = {
    SET_USET({ commit, state: IState }, data: IUser) {
        commit('SET_USET', data);
    }
};
export default actions;
