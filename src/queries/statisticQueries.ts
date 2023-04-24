import { useMutation } from "@tanstack/react-query";
import { StatisticQuery } from "apis/statistic/statistic.model";
import statisticRepository from "apis/statistic/statisticRepository";

export const useStatistic = () => {
  return useMutation(["statistic", "all"], (query: StatisticQuery) => statisticRepository.getStatistic(query));
};
