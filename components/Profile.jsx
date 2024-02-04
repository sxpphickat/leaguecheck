import { useState, useEffect } from "react";


export default function Profile({ searchQuery, isLoaded, setIsLoaded }) {
  const [ playerData, setPlayerData ] = useState(null);

  useEffect(() => {
    fetch(`/api/get_player?gameName=${searchQuery.gameName}&tagLine=${searchQuery.tagLine}`,)
    .then(res => res.json())
    .then(res => {
      setPlayerData(res);
      setIsLoaded(true);
    })
    .catch(err => console.error(err))
  }, [searchQuery])
  return (
    isLoaded ? (
    <>
      {playerData.status === 200 ? (<h1>YEEP PLAYER FOUND {playerData.body.gameName}</h1>) : (<h1>player not found</h1>)}
    </>
    ) : (
      <> {/* loading screen */} 
        <img src="/static/imgs/katarina_lowpoly.gif" alt="katarina_lowpoly" />
      </>
    )
  );
}
