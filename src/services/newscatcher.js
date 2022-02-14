import { newsCatcherConfig } from "../config";

export const getNews = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=democracy&sortBy=relevancy&apiKey=${newsCatcherConfig.MY_KEY}`);
  const data = await response.json();
  console.log(data.articles)
  return data.articles;
};