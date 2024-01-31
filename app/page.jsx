import { getPlayer } from './api/calls.js';


async function getData() {
  const data = await getPlayer('Sapphic Kat', 'BR1');
  return data; 
}
 
export default async function Home() {
  const data = await getData()
 
  console.log(data);
  return <main>hi, {data.gameName}</main>;
}