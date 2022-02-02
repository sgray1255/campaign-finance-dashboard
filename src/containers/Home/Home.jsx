import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getNews } from '../../services/newscatcher';
import 'bootstrap/dist/css/bootstrap.css';
import Card from "react-bootstrap/Card";
import styles from "./Home.module.scss";

const Home = () => {
  const [headlines, setHeadlines] = useState(null);

  useEffect(()=> {
    
    const populateHeadlines = async () => {
      const headlines = await getNews();
      setHeadlines(headlines);
    };

    populateHeadlines();
  }, []);
  if(!headlines) {
    return (
      <></>
    )
  } else if(headlines) return (
    <>
    <div className={styles.CardList}>
    {headlines.map((article, index) => 
      <Card className={styles.NewsCard} key={index}>
        <Card.Img src={article.urlToImage}/>
        <Card.Title style={{ padding: '2.5%'}}>{article.title}</Card.Title>
        <Card.Text style={{ padding: '2.5%'}}>{article.publishedAt.slice(0,10)}</Card.Text>
        <Card.Text style={{ padding: '2.5%'}}className={styles.ArticleUrl}>{article.description}</Card.Text>
        <a href={article.url}><button className={styles.button}>Read More</button></a>
      </Card>
      )}
      </div>
    </>
  )
}

export default Home;
