import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// const cryptoApiHeaders = {
//   'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//   'x-rapidapi-key': '24afd95508msh2c343f20c75ba19p100ab6jsnca13a0510852'
// };
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({  
method: 'GET',
url,
params: {

},
headers: {

}


});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

// this will be imported in the component that it is needed
export const { useGetCryptosNewsQuery } = cryptoNewsApi;