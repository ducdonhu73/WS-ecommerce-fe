import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { ApiResponse } from "../configs/types/apiResponse";
import { HttpMethod } from "../configs/types/httpMethod";
import { UrlRequestBuilder } from "../configs/urlRequestConfig";
import { StatisticQuery, StatisticResponse } from "./statistic.model";

export class StatisticApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  async getStatistic(params: StatisticQuery): Promise<ApiResponse<StatisticResponse[]>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "statistic",
      method: HttpMethod.GET,
      params,
    });
    return await this.client.request(request);
  }
}

const statisticApi = new StatisticApi(axiosClient);
export default statisticApi;
