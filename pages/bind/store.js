import { config } from '../../utils/config';
import { httpAgent } from '../../utils/util';

const baseUrl = config.formal.server;
const api = '/api';

const app = getApp();

export const store = {
  bindAccount({ accountNickname, cashType, accountType, accountName, accountNum,identityCardId,BCName,BCCity,BCBranch }, cb) {
    const url = baseUrl + api + '/user/cash/account.json';
    let param = {
      accountNickname,
      accountType,
      accountName,
      accountNum,
    };

    if(accountType == 2){//绑定银行卡
      param.identityCardId = identityCardId;
      param.bcName = BCName;
      param.bcCity = BCCity;
      param.bcBranch = BCBranch;
    }






    httpAgent(url, 'POST', param, cb);
  },

}