import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { findCandContrib, findCandSumm, findLegislator } from '../../services/civic';
import { getProfile } from '../../services/twitter_user';
import styles from "./Legislator.module.scss";
import Table from 'react-bootstrap/Table'

const Legislator = () => {
  const { id } = useParams();
  const [legislator, setLegislator] = useState(null);
  const [sectors, setSectors] = useState(null);
  const [summ, setSumm] = useState(null);
  const [chamber, setChamber] = useState(null);

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
      const summ = await findCandSumm(id);
      console.log(`Campaign Contribution by Ind : ${sectors}`);
      setSectors(sectors);
      setSumm(summ);
      const chamber = summ.chamber === "H" ? "Rep.":
                  summ.chamber === "S" ? "Sen.":
                  "Congressman";
      setChamber(chamber);
    }

    populateSectors();

  },[legislator]);


  if(!summ) {
    return <h1 className={styles.Loading}>Loading...</h1>

  } else {

  return (
    <div className={styles.Table}>
      <h1 className={styles.LegTitle}>{chamber} {legislator.firstlast} ({legislator.party})</h1>
      <h2 className={styles.LegTitle}>Up for re-election in {summ.next_election}</h2>
      <h2 className={styles.LegTitle}>Current Campaign Balance - ${summ.cash_on_hand}</h2>
      <h3 className={styles.TableTitle}>Campaign Contributions by Industry</h3>
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
