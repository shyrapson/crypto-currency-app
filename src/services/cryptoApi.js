import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';


// const cryptoApiHeaders = {
//   'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//   'x-rapidapi-key': '24afd95508msh2c343f20c75ba19p100ab6jsnca13a0510852'
// };
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({
  method: 'GET',
  url,
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    offset: '0'
  },
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '24afd95508msh2c343f20c75ba19p100ab6jsnca13a0510852'
  }


});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: (coinId) => createRequest(`/coin/exchanges`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({coinId,timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

// this will be imported in the component that it is needed
export const {
  useGetCryptosQuery,
  useGetExchangesQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery
} = cryptoApi;

