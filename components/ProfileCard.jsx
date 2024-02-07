import Icon from "@/components/Icon";
import Rank from "@/components/Rank";
import QueueSelector from "./QueueSelector";
import Winrate from "./Winrate";
import { useState } from "react";

/**
 * 
 * @returns {JSX}
 */
export default function ProfileCard({playerData}) {
  /**
   * 0 == solo, 1 == flex
   */
  const [ queueType, setQueueType ] = useState('RANKED_SOLO_5x5'); // 0 e 1 n da, pq o maior rank vem primeiro e pode interferir

  return (
    <div className="flex flex-col p-4 gap-8 justify-start items-center w-56 h-96 bg-neutral-200 rounded-lg shadow-xl dark:shadow-neutral-800 dark:bg-neutral-700 transition-all">
       {/*  <QueueSelector />  */}
        <Icon iconId={playerData.summoner.profileIconId} />
        <h1 className="flex justify-center text-lg font-medium">{playerData.player.gameName}</h1>
        <Rank rankedData={playerData.entries} 
              queueType={queueType}
        />
        {playerData.entries.length > 0 && <Winrate rankedData={playerData.entries}
                 queueType={queueType} 
        />}
    </div>
  );
};