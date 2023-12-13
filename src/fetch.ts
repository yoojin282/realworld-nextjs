import returnFetch from 'return-fetch';

const fetchLocal = returnFetch({
  baseUrl: process.env.LOCAL_API_URL,
});

export { fetchLocal };
