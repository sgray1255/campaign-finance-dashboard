import { useState, useEffect, useContext } from 'react';
import LegList from '../../components/LegList/LegList';
import {getLegislators} from '../../services/civic';
import { SearchContext } from "../../context/SearchContext";
import SearchBar from '../../components/SearchBar';
import styles from './Legislators.module.scss'
import LegListTitle from '../../components/LegListTitle';

const Legislators = () => {
  const [legislators, setLegislators] = useState(null);
  const { search } = useContext(SearchContext); 
  const [searchTitle, setSearchTitle] = useState(null);

  useEffect(()=> {
    
    const populateLegislators = async () => {
      const legislators = await getLegislators(search);
      setLegislators(legislators);
      const searchTitle = search.toUpperCase();
      setSearchTitle(searchTitle);
    };

    populateLegislators();
  }, [search]);


  return (
    <div>
      <SearchBar />
      {searchTitle ? <LegListTitle searchTitle={searchTitle} /> : ''}
      <LegList legislators={ legislators }/>
    </div>
  )
};

export default Legislators;
