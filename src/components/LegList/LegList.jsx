import LegCard from "../LegCard/LegCard";
import LegListTitle from "../LegListTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const LegList = ({ legislators }) => {

  if(legislators === null || legislators === undefined) {
    return (
      <>
      </>
    )
  };


  return (
    <>
    {legislators.map((legislator, index) => (
        <LegCard legislator={legislator} key={index} />
    ))}   
    </>
  )
}

export default LegList;
