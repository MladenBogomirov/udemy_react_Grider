import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID S6729A_OpLj46knjE1tbOtjoy2GeAfkTGpck2N4D8zo'
    }
});
