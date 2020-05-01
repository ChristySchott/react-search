import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WFed2W__rjUfh0Uyzjkv74nlKiWTEiO7wTBE9UDlvF0'
    }
});

