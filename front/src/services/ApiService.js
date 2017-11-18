import Constants from './ConstantsService';
import request from 'superagent';
import querystring from 'querystring';

export default {
    getVideos() {
        return new Promise((resolve, reject) => {
            request.get("http://sharedhorizons.api.vashnak.fr/api/videos")
                .send()
                .then(res => {
                    Constants.VIDEOS = res.body;
                    localStorage.setItem('videos', JSON.stringify(res.body));
                    return resolve(res.body);
                })
                .catch(reject);
        });
    },

    getUsers() {
        return new Promise((resolve, reject) => {
            request.get("http://sharedhorizons.api.vashnak.fr/api/users")
                .send()
                .then(res => {
                    return resolve(res.body);
                })
                .catch(reject);
        });
    },



    getUserVideos(userId) {
        return new Promise((resolve, reject) => {
            request.get("http://sharedhorizons.api.vashnak.fr/api/users/" + userId + "/videos")
                .send()
                .then(res => {
                    return resolve(res.body);
                })
                .catch(reject);
        });
    }
}