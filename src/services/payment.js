import api from './api';

export async function billet(data) {
    try {
        await api.post('/new-request', data);
    } catch (err) {
        throw err;
    }
}

