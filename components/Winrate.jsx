

export default function Winrate({ rankedData, queueType }) {
  const [ queueData ] = rankedData.filter((item) => item.queueType == queueType);
  
  const wins = queueData.wins;
  const losses = queueData.losses;
  const total = wins + losses;
  
  const winrate = Math.round((2 * wins) / (2 * total) * 100);

  return (
    <div className="text-sm font-medium">
      <div className="dark:text-neutral-500 text-neutral-400 text-sm font-mono">{wins}W/{losses}L</div>
      <span>Winrate: <span className={`font-mono font-bold ${winrate >= 50 ? 'text-blue-600' : 'text-red-600'}`}>{winrate}%</span></span>
    </div>
  );
}
