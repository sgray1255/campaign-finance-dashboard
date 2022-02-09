import LegCard from "../LegCard/LegCard";
import LegListTitle from "../LegListTitle";

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
