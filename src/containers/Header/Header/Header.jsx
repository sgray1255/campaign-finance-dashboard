import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

 const Header = () => {
  return (
    <div className={styles.Header}>
      <Link to="/"><h1 style={{ textDecoration: 'none' }} className={styles.title}>DemocraSee</h1></Link>
      <Link to="/legislators" style={{ textDecoration: 'none' }} className={styles.link}>Find your representatives <FontAwesomeIcon icon={faChevronRight}/></Link> 
    </div>
  )
};

export default Header;