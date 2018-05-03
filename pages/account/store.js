import { config } from '../../utils/config';
import { httpAgent } from '../../utils/util';

const baseUrl = config.formal.server;
const api = '/api';

const app = getApp();

export const store = {
  getCashList({ start,limit}, cb) {
    const url = baseUrl + api + '/finance/cash/apply/mine.json';
    const param = {
      start,
      limit,
    };
    httpAgent(url, 'GET', param, cb);
  },
  getAccountList({ start, limit }, cb) {
    const url = baseUrl + api + '/finance/flow/actor.json';
    const param = {
      start,
      limit,
      type:0
    };
    httpAgent(url, 'GET', param, cb);
  },


  

}