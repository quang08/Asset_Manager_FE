import axios, { AxiosInstance } from "axios";

const BASE_URL_API = 'http://localhost:3000'

const http = axios.create({
    baseURL: BASE_URL_API,
});

http.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        return error.response;
    }
);

export class BaseService {
    httpClientPublic;

    constructor() {
        this.httpClientPublic = http;
    }
}