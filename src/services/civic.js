const MY_KEY = "&apikey=84b4c91ff2769e5079c6c4132930f73b";
const GET_LEGISLATORS_API = "http://www.opensecrets.org/api/?method=getLegislators&output=json&id=";
const CAND_CONTRIB_BY_SECTOR = "http://www.opensecrets.org/api/?method=candSector&output=json&cid=";

export const getLegislators = async (search) => {

  const response = await fetch(`${GET_LEGISLATORS_API}${search}${MY_KEY}`);
  const data = await response.json();
  const legislatorsResponse = data.response.legislator;
  const legislators = legislatorsResponse.map((legislator) => legislator["@attributes"]);
  console.log(legislators)
  return legislators;
};

export const findLegislator = async (id) => {
  const response = await fetch(`${GET_LEGISLATORS_API}${id}&cycle=2020&output=json${MY_KEY}`);
  const data = await response.json();
  const legislatorResponse = data.response.legislator;
  const legislator = legislatorResponse["@attributes"];
  console.log(legislator);
  return legislator;
};

export const findCandContrib = async (id) => {
  const response = await fetch(`${CAND_CONTRIB_BY_SECTOR}${id}${MY_KEY}`);
  const data = await response.json();
  const candContribResponse = data.response.sectors.sector;
  const sectors = candContribResponse.map((sector) => sector["@attributes"]);
  console.log(sectors);
  return sectors;
};


