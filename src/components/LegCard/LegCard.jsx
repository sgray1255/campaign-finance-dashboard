import 'bootstrap/dist/css/bootstrap.css';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import styles from './LegCard.module.scss';

const LegCard = ({legislator}) => (
  <Card>
    <div className={styles.CardTitle}>
      <Card.Title style={{fontFamily: 'Roboto, sans-serif', fontWeight: 'lighter'}}>{legislator.firstlast}</Card.Title>
      <span className={styles.CardTitle__party}>({legislator.party})</span>
    </div>
    <Card.Text style={{fontFamily: 'Roboto, sans-serif'}}>{legislator.phone}</Card.Text>
    <Link to={`/legislators/${legislator.cid}`} style={{fontFamily: 'Roboto, sans-serif'}}>More info...
    </Link>
  </Card>
)

export default LegCard;
