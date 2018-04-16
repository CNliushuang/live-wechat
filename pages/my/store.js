import { config } from '../../utils/config';
import { httpAgent } from '../../utils/util';

const baseUrl = config.formal.server;
const api = '/api';

const app = getApp();

export const store = {
  getCashAccount({  }, cb) {
    const url = baseUrl + api + '/user/cash/account.json';
    const param = {
    };
    httpAgent(url, 'GET', param, cb);
  },

}