import Axios from '../axios';
import { IUtils, IResData } from '../interface/IDataInterface';
/**
 * @Desc     创建promise执行
 * @param    {[type]}   o [入参]
 */
function createPromise(o: IUtils): Promise<IResData> {
    return new Promise((resolve, reject) => {
        Axios.get(o.url, { params: o.params }).then((res: any) => {
            if (o.params) {
                resolve(res);
            } else {
                if (0 === Number.parseInt(res.status, 10)) {
                    resolve(res);
                } else {
                    reject(res);
                }
            }
        }).catch();
    });
}

const Utils: any = {
    // 接口测试
    test({ url = 'test.json', params = {} } = {}) {
        return createPromise({ url, params });
    }
};

export { Utils };
