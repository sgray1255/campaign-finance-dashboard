
export const getNews = async () => {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=politics&sortBy=relevancy&apiKey=95f68f0579fb48d4810ffb44c7ad46df');
  const data = await response.json();
  console.log(data.articles)
  return data.articles;
};