import { createClient } from 'microcms-js-sdk'; //ES6

// Initialize Client SDK.
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
 // retry: true // Retry attempts up to a maximum of two times.
});


export type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
};
export type ArticleResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Article[];
};


export const getArticles = async () => {
  return await client.get<ArticleResponse>({ endpoint: "news" });
};