import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";

function sleep(ms) {
  setTimeout(() => {}, ms);
  return <ProfileCard />;
}


export default function Profile({ searchQuery, isLoaded, setIsLoaded, setCardHeight }) {
  const [ playerData, setPlayerData ] = useState(null);

  useEffect(() => {
    fetch(`/api/get_player?gameName=${searchQuery.gameName}&tagLine=${searchQuery.tagLine}&server=${searchQuery.server}`,)
    .then(res => res.json())
    .then(res => {
      setPlayerData(res);
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
      res.status === 200 ? setCardHeight('h-96') : setCardHeight('h-32');
    })
    .catch(err => console.error(err))
  }, [searchQuery])
  return (
    isLoaded ? (
    <>
      {playerData.status === 200 ? (<ProfileCard playerData={playerData.body} />) : (<h1>player not found ☠️</h1>)}
    </>
    ) : (
      <> {/* loading screen */} 
        <img src="/static/imgs/katarina_lowpoly.gif" alt="katarina_lowpoly" />
      </>
    )
  );
}
