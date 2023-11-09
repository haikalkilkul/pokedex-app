import { getPokemon } from '../../helpers/api'

export default async function Test() {
  const data = await getPokemon();
  console.log(data)
  return (
    <>
    <div>{data.name}</div>
    </>
  )
}
