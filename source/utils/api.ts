import Axios, {AxiosResponse} from 'axios';

const BASE_URL = 'https://stephen-king-api.onrender.com/api';
type RequestType = 'post' | 'get';

export const api = (
  url: string,
  type: RequestType,
  data: any,
): Promise<AxiosResponse | any> => {
  if (!url || typeof url !== 'string') {
    throw new Error('Please pass a string url to this function: /path/to/api');
  }
  if (!type || typeof type !== 'string') {
    throw new Error('Please add string api request type: post, get');
  }

  return new Promise((resolve, reject) => {
    Axios({
      method: type,
      url: `${BASE_URL}${url}`,
      data,
    })
      .then(res => {
        resolve(res?.data || res);
      })
      .catch(error => {
        if (error && !error.response) {
          console.log(
            'Could not connect to the server, please check your internet connection',
          );
          reject(new Error());
        }
        reject(error.response?.data);
      });
  });
};
