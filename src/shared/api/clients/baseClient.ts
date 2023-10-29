import axios, { AxiosError, AxiosInstance, AxiosResponse, isAxiosError } from 'axios';

export class BasicAgent {
  agent: AxiosInstance;

  constructor(baseURL: string) {
    this.agent = axios.create({
      baseURL,
    });

    this.agent.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse,
    );
  }

  private handleSuccessResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  private handleErrorResponse = (error: AxiosError | Error) => {
    if (isAxiosError(error) && error.response?.status === 401) {
      window.location.href = window.location.origin;
    }
    return Promise.reject(error);
  };
}
