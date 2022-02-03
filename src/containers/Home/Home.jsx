import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getNews } from '../../services/newscatcher';
import 'bootstrap/dist/css/bootstrap.css';
import Card from "react-bootstrap/Card";
import styles from "./Home.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faNewspaper } from '@fortawesome/free-solid-svg-icons';



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
      <h2 className={styles.CardList__Title}>Democracy Dispatch&nbsp;&nbsp;<FontAwesomeIcon icon={faNewspaper}/></h2>
    {headlines.map((article, index) => 
      <Card className={styles.NewsCard} key={index}>
        <Card.Img src={article.urlToImage}/>
        <div className={styles.NewsCard__Header}>
          <Card.Title className={styles.NewsCard__Title} style={{ padding: '2.5%'}}>{article.title} - {`${!article.title}.contains(${article.source.name})` ? article.source.name : ''} </Card.Title>
          <Card.Text className={styles.NewsCard__Date} style={{ padding: '2.5%'}}>{article.publishedAt.slice(0,10).replace(/-/g,'.').split('.').reverse().join('.')} </Card.Text>
        </div>
        <Card.Text style={{ padding: '2.5%'}}className={styles.ArticleUrl}>{article.description}</Card.Text>
        <a className={styles.A} href={article.url}>Read More <FontAwesomeIcon icon={faChevronRight}/></a>
      </Card>
      )}
      </div>
    </>
  )
}

export default Home;
