import { config } from '../../utils/config';
import { httpAgent } from '../../utils/util';

const baseUrl = config.formal.server;
const api = '/api';

const app = getApp();

export const store = {
  bindHandleAccount({ accountNickname, cashType, accountType, accountName, accountNum }, cb) {
    const url = baseUrl + api + '/user/cash/account.json';
    const param = {
      accountNickname,
      cashType,
      accountType,
      accountName,
      accountNum,
    };
    httpAgent(url, 'POST', param, cb);
  },

}