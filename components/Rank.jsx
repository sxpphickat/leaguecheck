
/**
 * Rank function description 
 * 
 * @typedef {Object} RankParams 
 * @property {Array} rankedData - solo and flex data
 * @property {string} queueType - type of the queue
 *
 * @param {RankParams} param0 - desconstructed props 
 * @returns  {React.ReactNode}
 */
export default function Rank({rankedData, queueType}) {
  if (rankedData.length === 0) {
    return (
      <div className="font-mono font-medium">
        <span>Unranked</span>
      </div>
    );
  };


  const [ queueData ] = rankedData.filter((item) => item.queueType == queueType);
  return (
    <div className="font-mono ">
      <span className="">{queueData.tier.charAt(0) + queueData.tier.slice(1).toLowerCase()} -</span>
      <span className="font-bold" > {queueData.rank}</span>
      <div className="flex justify-center">
        <div className="text-md mx-auto">
          {queueData.leaguePoints} <span className="text-sm"> pdl</span>
        </div>
      </div>
    </div>
  );
};
