import { GearSellerApiResponse, ListDataResponse } from "apis/configs/types/apiResponse";
import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { HttpMethod } from "../configs/types/httpMethod";
import { UrlRequestBuilder } from "../configs/urlRequestConfig";
import { FAQ, FAQCategory } from "./faq.model";

export class FaqApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }
  async getFaqCategories(): Promise<GearSellerApiResponse<ListDataResponse<FAQCategory>>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "faq/categories",
      method: HttpMethod.GET,
    });
    return await this.client.request(request);
  }

  async getFaqs(): Promise<GearSellerApiResponse<ListDataResponse<FAQ>>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "faq",
      method: HttpMethod.GET,
    });
    return await this.client.request(request);
  }
}

const faqApi = new FaqApi(axiosClient);
export default faqApi;
