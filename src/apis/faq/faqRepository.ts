import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { FAQ, FAQCategory } from "./faq.model";
import { FaqApi } from "./faqApi";

class FaqRepository {
  private faqApi: FaqApi;

  constructor(client: HttpClient) {
    this.faqApi = new FaqApi(client);
  }

  async getFaqCategories(): Promise<FAQCategory[]> {
    const response = await this.faqApi.getFaqCategories();
    return response.payload.data;
  }

  async getFaqs(): Promise<FAQ[]> {
    const response = await this.faqApi.getFaqs();
    return response.payload.data;
  }
}

const faqRepository = new FaqRepository(axiosClient);
export default faqRepository;
