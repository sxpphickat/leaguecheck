import { NextResponse } from 'next/server';
 
export async function GET(request) {
  const { gameName, tagLine } = request.query;
  console.log(gameName, tagLine);

  return NextResponse.json(await getPuuidByRiotId(gameName, tagLine));
}