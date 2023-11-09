import axios, { AxiosError, AxiosInstance, AxiosResponse, isAxiosError } from 'axios';

export class BaseApiClient {
  client: AxiosInstance;
  baseURL: string;

  constructor(domainURL: string) {
    this.baseURL = `${import.meta.env.VITE_API_BASE_URL}${domainURL}`;

    this.client = axios.create({
      baseURL: import.meta.env.DEV ? `/backend${domainURL}` : this.baseURL,
    });

    this.client.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse,
    );
  }

  private handleSuccessResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  private handleErrorResponse = (error: AxiosError | Error) => {
    if (isAxiosError(error) && error.response?.status === 401) {
      localStorage.removeItem('user_id');
      window.location.href = window.location.origin;
    }
    return Promise.reject(error);
  };
}
