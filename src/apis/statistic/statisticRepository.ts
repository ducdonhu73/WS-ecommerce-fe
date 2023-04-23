import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { StatisticApi } from "./orderApi";
import { StatisticQuery, StatisticResponse } from "./statistic.model";

class StatisticRepository {
  private statisticApi: StatisticApi;

  constructor(client: HttpClient) {
    this.statisticApi = new StatisticApi(client);
  }

  async getStatistic(query: StatisticQuery): Promise<StatisticResponse[]> {
    const response = await this.statisticApi.getStatistic(query);
    return response.payload;
  }
}

const statisticRepository = new StatisticRepository(axiosClient);
export default statisticRepository;
