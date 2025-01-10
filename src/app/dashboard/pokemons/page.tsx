import { PokemonGrid } from '@/pokemons/components/PokemonGrid';
import type { PokemonResponse } from '@/pokemons/interfaces/pokemon-response';
import type { SimplePokemon } from '@/pokemons/interfaces/simple-pokemon';

export const metadata = {
  title: 'Pokémon',
  description: 'Aquí se muestra todos los Pokémon disponibles',
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className='flex flex-col p-2'>
      <span className='text-5xl my-2'>
        Listado de Pokemons <small className='text-blue-500'>Estático</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
