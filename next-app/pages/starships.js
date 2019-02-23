import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Starship from '../components/starship'

const query = `
{
  allStarships {
    id
    name
  }
}`

const Starships = ({data : { allStarships }}) => <>
  <h1>Starships from <a href="https://swapi.co/">SWAPI</a></h1>
  <p>
    This query comes from the <a href="https://github.com/theRemix/Next-Serverless/blob/master/next-app/pages/starships.js">
      next page using `getInitialProps`</a>
  </p>

  { allStarships.map(Starship) }
</>

Starships.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.graphcms.com/simple/v1/swapi', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    json: true,
    body: JSON.stringify({ query })
  })
  return await res.json()
}

export default Starships;
