import { UrlRequest } from './urlRequestConfig';

export interface HttpClient {
  request<T, R>(request: UrlRequest<T>): Promise<R>;
}
