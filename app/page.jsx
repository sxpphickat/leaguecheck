
export default async function Home() {
  const data = await fetch('https://leaguecheck.vercel.app/api/get-player')
  .then((res) => {
    if(!res.ok) {
      throw new Error('error no 666');
      }
      return res.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error: ', error);
    });
       
    return <main>hi, {data.body.gameName}</main>;
}