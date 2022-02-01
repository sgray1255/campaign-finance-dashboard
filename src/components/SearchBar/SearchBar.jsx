import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import {getLegislators} from "../../services/civic";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const SearchBar = () => {
    const [currentInput, setCurrentInput] = useState("");
    
    const { setSearch } = useContext(SearchContext);

    const handleChange = (event) => {
        setCurrentInput(event.target.value);
    };

    const handleKeyPress = (event) => {
        
        if(event.key === 'Enter') {
            setSearch(currentInput); 
            setCurrentInput("");
            console.log(getLegislators(currentInput))
            getLegislators(currentInput);
        }
        
    };

    const handleClick = (event) => {
            setSearch(currentInput); 
            setCurrentInput("");
            console.log(getLegislators(currentInput))
            getLegislators(currentInput);
    };

    return (
            <div className={styles.SearchBar}>
                <input className={styles.input} value={currentInput} onChange={handleChange}
                onKeyDown={handleKeyPress} type="text" />
                <FontAwesomeIcon className={styles.SearchBar__icon} onClick={handleClick} icon={faSearch}/>
            </div>
    );
};


export default SearchBar;