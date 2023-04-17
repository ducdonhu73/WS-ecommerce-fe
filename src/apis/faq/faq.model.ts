export interface FAQCategory {
  id: string;
  name: string;
}

export interface FAQ {
  id: string;
  categoryId: string;
  question: string;
  answer: string;
}
