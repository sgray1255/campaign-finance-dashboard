import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { findCandContrib, findLegislator } from '../../services/civic';
import { getProfile } from '../../services/twitter_user';
import styles from "./Legislator.module.scss";
import Table from 'react-bootstrap/Table'

const Legislator = () => {
  const { id } = useParams();
  const [legislator, setLegislator] = useState(null);
  const [sectors, setSectors] = useState(null);

  useEffect(() => {
    const populateLegislator = async () => {
      const legislator = await findLegislator(id);
      console.log(`Legislator Info : ${legislator}`);
      setLegislator(legislator);
    }

    populateLegislator();

  },[id]);

  useEffect(() => {
    const populateSectors = async () => {
      const sectors = await findCandContrib(id);
      console.log(`Campaign Contribution by Ind : ${sectors}`);
      setSectors(sectors);
    }

    populateSectors();

  },[legislator]);


  if(!sectors) {
    return <h1 className={styles.Loading}>Loading...</h1>

  } else {

  return (
    <div className={styles.Table}>
      <h1 className={styles.LegTitle}>{legislator.firstlast}({legislator.party})</h1>
        <Table bordered striped>
            <thead className={styles.Thead}>
              <tr>
                <th>#</th>
                <th><strong>Industry</strong></th>
                <th><strong>Pacs</strong></th>
                <th><strong>Individuals</strong></th>
                <th><strong>Total</strong></th>
              </tr> 
            </thead>
          {sectors.sort((a,b) => b.total - a.total).map((sector, index) => (
            <tbody>
              <tr>
                <td>{sectors.indexOf(sector) + 1}</td>
                <td>{sector.sector_name}</td>
                <td>${sector.pacs}</td>
                <td>${sector.indivs}</td>
                <td>${sector.total}</td>
              </tr>
            </tbody>
          ))}
        </Table>
    </div>
  )
}};

export default Legislator;
