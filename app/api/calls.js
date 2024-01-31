import routes from './riot_endpoints.js' 
//assert { type: 'json' }

const header = {
    headers: {
      "X-Riot-Token": process.env.API_TOKEN
    }
};

/** 
 * @param {string} gameName - Riot id name
 * @param {string} tagLine - server tag
 * @returns {object} 
 */
async function getPlayer(gameName, tagLine) {
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

async function getSummoner(player) {
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

async function getEntries(summoner) {
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

export { getPlayer, getSummoner, getEntries }
