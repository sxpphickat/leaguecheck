export default function Icon({iconId}) {

  return (
    <img  src={`https://ddragon.leagueoflegends.com/cdn/14.2.1/img/profileicon/${iconId}.png`} 
          alt="profile icon"
          className="w-auto h-28 rounded-3xl shadow-xl shadow-neutral-600 dark:shadow-neutral-900"
          />
  );
};