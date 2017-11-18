import Constants from './ConstantsService';
import request from 'superagent';
import querystring from 'querystring';

export default {
    requestServiceChecker(method, route, bodyParams = {}, queryParams = {}) {
        return new Promise((resolve, reject) => {
            request(method, Constants.SERVICE_CHECKER_API_URL + route + '?' + querystring.stringify(queryParams))
                .send(bodyParams)
                .then(res => {
                    return resolve(res.body);
                })
                .catch(reject);
        });
    },

    requestGcnTools(method, route, bodyParams = {}, queryParams = {}) {
        return new Promise((resolve, reject) => {
            request(method, Constants.GCN_TOOLS_API_URL + route + '?' + querystring.stringify(queryParams))
                .send(bodyParams)
                .then(res => {
                    return resolve(res.body);
                })
                .catch(reject);
        });
    }
}