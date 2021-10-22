import axios from 'axios';
import localForage from 'localforage';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
    maxAge: 60 * 60 * 1000,
    store: localForage,
    exclude: {
        query: false
    }
});

const axiosInstance = axios.create({
    baseURL: 'https://data.nasdaq.com/api/v3/datasets/WIKI',
    adapter: cache.adapter
});

export const getDailyChartForSymbol = (symbol) => {
    return axiosInstance.get(`/${symbol}/data.json`, {
        params: {
            api_key: 'ocd5DeyxZqbQcqLFDg2Y'
        }
    })
};
