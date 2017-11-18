import Constants from './ConstantsService';
import request from 'superagent';
import querystring from 'querystring';

export default {
    getVideos() {
        return new Promise((resolve, reject) => {
            request.get("http://sharedhorizons.api.vashnak.fr/videos")
                .send()
                .then(res => {
                    return resolve(res.body);
                })
                .catch(reject);
        });
    },

    getUsers() {
        return new Promise((resolve, reject) => {
            request.get("http://sharedhorizons.api.vashnak.fr/users")
                .send()
                .then(res => {
                    return resolve(res.body);
                })
                .catch(reject);
        });
    },



    getUserVideos(userId) {
        return new Promise((resolve, reject) => {
            request.get("http://sharedhorizons.api.vashnak.fr/users/" + userId + "/videos")
                .send()
                .then(res => {
                    return resolve(res.body);
                })
                .catch(reject);
        });
    }
}