import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { findCandContrib, findLegislator } from '../../services/civic';
import { getProfile } from '../../services/twitter_user';
import styles from "./Legislator.module.scss";

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
    <div>
      <h1 className={styles.LegTitle}>{legislator.firstlast}({legislator.party})</h1>
      <h2>This is how much money {legislator.firstlast} took from the top contributing industries, from highest contributing industry to lowest contributing industry.</h2>
      <ol>
      {sectors.sort((a,b) => b.total - a.total).map((sector, index) => (
          <li key={index}>{sector.sector_name} 
            <ul>
              <li>From Pacs: ${sector.pacs}</li>
              <li>From Individuals: ${sector.indivs}</li>
              <li>Total: ${sector.total}</li>
            </ul>
          </li>
      ))}
      </ol>
    </div>
  )
}};

export default Legislator;
