import axios from 'axios';

const api = axios.create({
    base_url :'https://v8.api.storemate.parallaxtec.com/api/ims/unit/list',
    headers:{
        'x-Tenant': 'gayashan',
    },
});

export default api;