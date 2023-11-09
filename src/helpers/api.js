const url = "https://pokeapi.co/api/v2/pokemon/373"

export async function getPokemon() {
  const res = await fetch(url)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}