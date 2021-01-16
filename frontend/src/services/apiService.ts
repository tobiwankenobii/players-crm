import axios from 'axios';

export const apiService = () => {
    const userInfo = localStorage.getItem('userInfo');
    const headers = {
        Authorization: userInfo ? 'JWT ' + JSON.parse(userInfo).access : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    };

    return axios.create({
        baseURL: 'http://localhost:8080',
        headers: headers,
    });
};
