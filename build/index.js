// riot_endpoints.json
var riot_endpoints_default = {
  server: {
    BR1: "br1.api.riotgames.com",
    NA1: "na1.api.riotgames.com"
  },
  region: {
    AMERICAS: "americas.api.riotgames.com"
  },
  endpoint: {
    puuid: "/riot/account/v1/accounts/by-riot-id/",
    summoner: "/lol/summoner/v4/summoners/by-puuid/",
    entryes: "/lol/league/v4/entries/by-summoner/"
  }
};

// index.js
async function getPuuidByRiotId(gameName, tagLine) {
  const accountEndPoint = `${riot_endpoints_default["endpoint"]["puuid"]}${gameName}/${tagLine}`;
  const request = new URL(`https://${riot_endpoints_default["region"]["AMERICAS"]}${accountEndPoint}?api_key=${process.env.API_TOKEN}`);
  const res = await fetch(request).then((res2) => {
    if (!res2.ok) {
      throw new Error("error no 666");
    }
    return res2.json();
  }).then((data) => {
    return data;
  }).catch((error) => {
    console.error("Error: ", error);
  });
  return res;
}
async function getSummonerByPuuid(player) {
  const request = new URL(`https://${riot_endpoints_default["server"]["BR1"]}${riot_endpoints_default["endpoint"]["summoner"]}${player.puuid}`);
  const res = await fetch(request, header).then((res2) => {
    if (!res2.ok) {
      console.log(res2);
      throw new Error("summoner");
    }
    return res2.json();
  }).then((data) => {
    return data;
  }).catch((error) => {
    console.error("Error: ", error);
  });
  return res;
}
async function getEntriesBySummoner(summoner) {
  const request = new URL(`https://${riot_endpoints_default["server"]["BR1"]}${riot_endpoints_default["endpoint"]["entryes"]}${summoner.id}`);
  const res = await fetch(request, header).then((res2) => {
    if (!res2.ok) {
      throw new Error("entryes");
    }
    return res2.json();
  }).then((data) => data).catch((error) => {
    console.error("Error: ", error);
  });
  return res;
}
async function run() {
  const player = await getPuuidByRiotId("Sapphic Kat", "BR1");
  console.log(player);
  const summoner = await getSummonerByPuuid(player);
  const entryes = await getEntriesBySummoner(summoner);
  console.log(`${entryes[0].summonerName}, your elo is: ${entryes[0].tier} - ${entryes[0].rank}`);
}
console.log(riot_endpoints_default);
var process = {
  env: {
    API_TOKEN: "RGAPI-603916e3-e790-47b4-be4e-6ac35aa240b9"
  }
};
run();
