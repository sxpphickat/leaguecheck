import routes from './riot_endpoints.json' assert { type: 'json' }

const header = {
    headers: {
      "X-Riot-Token": process.env.API_TOKEN
    }
};


async function getPuuidByRiotId(gameName, tagLine) {
  const accountEndPoint = `${routes['endpoint']['puuid']}${gameName}/${tagLine}`;
  const request = new URL(`https://${routes['region']['AMERICAS']}${accountEndPoint}`);


  const res = await fetch(request, header)
    .then((res) => {
    if(!res.ok) {
      throw new Error('error no 666');
      }
      return res.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error: ', error);
    });
  return res;
};


async function getSummonerByPuuid(player) {
  const request = new URL(`https://${routes['server']['BR1']}${routes['endpoint']['summoner']}${player.puuid}`); 


  const res = await fetch(request, header)
    .then(res => {
      if (!res.ok) {
        console.log(res);
        throw new Error('summoner');
      }
      return res.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error: ', error);
    });
  return res;
}
//console.log(summoner);

async function getEntriesBySummoner(summoner) {
  const request = new URL(`https://${routes['server']['BR1']}${routes['endpoint']['entryes']}${summoner.id}`);
  
  const res = await fetch(request, header)
  .then(res => {
      if (!res.ok) {
        throw new Error('entryes');
      }
      return res.json();
    })
  .then(data => data)
  .catch(error => {
      console.error('Error: ', error);
    });
  return res;
}


export { getPuuidByRiotId, getSummonerByPuuid, getEntriesBySummoner }

//run();

//console.log(entryes);
