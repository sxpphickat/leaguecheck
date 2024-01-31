/* import { NextResponse } from 'next/server';
import { getPlayer } from '../calls';

async function getData() {
  const data = await getPlayer('Sapphic Kat', 'BR1')
  return (data);
}
 
export function GET(request) {
  const { gameName = 'Sapphic Kat', tagLine = 'BR1' } = request.query;
  const data = getData();

  return NextResponse.json(data);
} */