import 'bootstrap/dist/css/bootstrap.css';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const LegCard = ({legislator}) => (
  <Card>
    <Card.Title>{legislator.firstlast}({legislator.party})</Card.Title>
    <Card.Text>{legislator.phone}</Card.Text>
    <Link to={`/legislators/${legislator.cid}`}>More info...
    </Link>
  </Card>
)

export default LegCard;
