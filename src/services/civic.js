import { openSecretsConfig, googleCivicsConfig, openStatesConfig } from "../config";

// ---- APIs ----
const GET_LEGISLATORS_API = "http://www.opensecrets.org/api/?method=getLegislators&output=json&id=";
const CAND_CONTRIB_BY_SECTOR = "http://www.opensecrets.org/api/?method=candSector&output=json&cid=";
const CAND_SUMM = "http://www.opensecrets.org/api/?method=candSummary&output=json&cid=";
GOOGLE_CIVIC_API = "https://www.googleapis.com/civicinfo/v2/elections?key=";
OPEN_STATES_JURISDICTIONS = "https://v3.openstates.org/jurisdictions?apikey="


export const getLegislators = async (search) => {

  const response = await fetch(`${GET_LEGISLATORS_API}${search}${openSecretsConfig.MY_KEY}`);
  const data = await response.json();
  const legislatorsResponse = data.response.legislator;
  const legislators = legislatorsResponse.map((legislator) => legislator["@attributes"]);
  return legislators;
};

export const findLegislator = async (id) => {
  const response = await fetch(`${GET_LEGISLATORS_API}${id}&cycle=2020&output=json${openSecretsConfig.MY_KEY}`);
  const data = await response.json();
  const legislatorResponse = data.response.legislator;
  const legislator = legislatorResponse["@attributes"];
  return legislator;
};

export const findCandContrib = async (id) => {
  const response = await fetch(`${CAND_CONTRIB_BY_SECTOR}${id}${openSecretsConfig.MY_KEY}`);
  const data = await response.json();
  const candContribResponse = data.response.sectors.sector;
  const sectors = candContribResponse.map((sector) => sector["@attributes"]);
  return sectors;
};

export const findCandSumm = async (id) => {
  const response = await fetch(`${CAND_SUMM}${id}${openSecretsConfig.MY_KEY}`);
  const data = await response.json();
  const candSummResponse = data.response.summary;
  const summ = candSummResponse["@attributes"];
  console.log(summ)
  return summ;
};


// export const searchJurisdictions = async (state) => {
//   const response = await fetch(`${OPEN_STATES_JURISDICTIONS}${GOOGLE_KEY}`);
//   const data = await response.json();
//   console.log(data);

// }

// export const searchLocalByAddress = async (address) => {
//   const response = await fetch(`${GOOGLE_CIVIC_API}${GOOGLE_KEY}&address=${address}`);
//   const data = await response.json();
//   console.log(data);

// }

