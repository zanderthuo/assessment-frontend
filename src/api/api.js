import axios from 'axios';

const API_BASE_URL = 'https://kcb-boma-yangu-backend-kcb-boma-yangu.apps.dev.aro.kcbgroup.com/api/users';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Authorization': 'Basic Qm9tYVBvcnRhbENsaWVudDpjYmZiZDBhYi0yODc2LTQ0MmItYTNjOC04YWVkOTYzMmJhODM=',
        'Cookie': 'fbcddb7c82b2370dbc9f2956b19e7c33=f2001438c8f7916be557203a22cc5dc0',
        'Content-Type': 'application/json'
    }
    // Add any other default config options here, such as headers or interceptors
});

export default axiosInstance;
