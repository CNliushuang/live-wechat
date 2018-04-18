import { config } from '../../utils/config';
import { httpAgent } from '../../utils/util';

const baseUrl = config.formal.server;
const api = '/api';

const app = getApp();

export const store = {
  newCach({ identityName, identityCardId, cashAccountId, money, content}, cb,errorcb) {
    const url = baseUrl + api + '/finance/cash/apply.json';
    const param = {
      identityName,
      identityCardId,
      cashAccountId,
      money,
      content,
    };
    httpAgent(url, 'POST', param, cb, errorcb);
  },

}