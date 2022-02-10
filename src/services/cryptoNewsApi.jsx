import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const createRequest = (url) => ({  
    method: 'GET',
    url,
    params: {safeSearch: 'Off', textFormat: 'Raw'},
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': '24afd95508msh2c343f20c75ba19p100ab6jsnca13a0510852'
    }

});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: ({newsCategory,count}) =>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

// this will be imported in the component that it is needed
export const { useGetCryptosNewsQuery } = cryptoNewsApi;

