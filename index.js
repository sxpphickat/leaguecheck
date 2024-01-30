import { getPuuidByRiotId, getSummonerByPuuid, getEntriesBySummoner } from './api_calls';
 
async function run() {

  const player = await getPuuidByRiotId('Sapphic Kat', 'BR1');
  const summoner = await getSummonerByPuuid(player);
  const entryes = await getEntriesBySummoner(summoner);

  console.log(`${entryes[0].summonerName}, your elo is: ${entryes[0].tier} - ${entryes[0].rank}`);
}

run();
