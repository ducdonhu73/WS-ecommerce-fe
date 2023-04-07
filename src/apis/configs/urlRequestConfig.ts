import { AxiosRequestConfig } from "axios";
import qs from "qs";

import dateTransformer from "./axiosDateTransformer";
import { HttpMethod } from "./types/httpMethod";

export type RequestHeaders = Record<string, string | number | boolean>;

export class ApiConfig {
  private static _instance: ApiConfig = new ApiConfig();
  constructor() {
    if (!ApiConfig._instance) {
      ApiConfig._instance = this;
    }
    return ApiConfig._instance;
  }

  static getInstance() {
    return this._instance;
  }

  public accessToken: string | null = null;
  public musicToken: string | null = null;
}

export interface UrlRequest<T = unknown, R = unknown> {
  url: string;
  method: HttpMethod;
  headers?: RequestHeaders;
  body?: T;
  params?: R;
  timeout: number;
}

interface RequestConfig<T, R> {
  path: string;
  method: HttpMethod;
  headers?: RequestHeaders;
  body?: T;
  params?: R;
}

export class UrlRequestBuilder {
  static defaultRequest<T, R>(config: RequestConfig<T, R>): UrlRequest<T, R> {
    const baseUrl = "http://localhost:8000";
    const url = new URL(config.path, baseUrl).toJSON();
    const headers: RequestHeaders = {
      "Content-type": "application/json",
      "X-Auth-Token": ApiConfig.getInstance().accessToken ?? "",
    };
    return {
      url,
      method: config.method,
      headers: { ...headers, ...config.headers },
      body: config.body,
      params: config.params,
      timeout: 30000,
    };
  }

  static epidemicRequest<T, R>(config: RequestConfig<T, R>): UrlRequest<T, R> {
    const baseUrl = "https://partner-content-api-sandbox.epidemicsound.com";
    const url = new URL("/v0" + config.path, baseUrl).toJSON();
    const headers: RequestHeaders = {
      "Content-type": "application/json",
      Authorization: `Bearer ${ApiConfig.getInstance().musicToken ?? ""}`,
    };
    return {
      url,
      method: config.method,
      headers: { ...headers, ...config.headers },
      body: config.body,
      params: config.params,
      timeout: 30000,
    };
  }
}

export function buildAxiosRequestConfig<T, R>(urlRequest: UrlRequest<T, R>): AxiosRequestConfig<T> {
  const { url, headers, body, params, method, timeout } = urlRequest;
  return {
    url,
    headers,
    data: body,
    params,
    method,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: "comma" }),
    timeout,
    transformResponse: dateTransformer,
  };
}
