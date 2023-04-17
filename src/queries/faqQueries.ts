import { useQuery } from "@tanstack/react-query";
import faqRepository from "apis/faq/faqRepository";

export const useGetFaqCategories = () => useQuery(["faq", "categories"], () => faqRepository.getFaqCategories());
export const useGetFaqs = () => useQuery(["faq", "faqs"], () => faqRepository.getFaqs());
