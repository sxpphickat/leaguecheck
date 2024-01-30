import { getPuuidByRiotId } from '../calls.js';

/**
 * request the player info from riot api
 * @param {string} gameName - Riot ID name
 * @param {string} tagLine - Server Tag
 * @returns {object}
*/
export default async function handler(req, res) {
  const { gameName, tagLine } = req.query;

  console.log(gameName, tagLine);
  
  return res.json(await getPuuidByRiotId(gameName, tagLine));
  
}
