// getter定义
import state from './state';
import { IState } from '../interface/IDataInterface';
import { GetterTree } from 'vuex';
const getters: GetterTree<IState, any> = {
    iUser: (state: IState) => state.user,
    profile: (state: IState) => state.profile,
    permitList: (state: IState) => state.permitList,
    perList: (state: IState) => state.perList,
    companyData: (state: IState) => state.companyData,
};
export default getters;
