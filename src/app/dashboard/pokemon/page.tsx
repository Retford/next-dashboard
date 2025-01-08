import { PokemonResponse } from '@/app/pokemon/interfaces/pokemon-response';
import { SimplePokemon } from '@/app/pokemon/interfaces/simple-pokemon';
import Image from 'next/image';

export const metadata = {
  title: 'Pokémon',
  description: 'Aquí se muestra todos los Pokémon disponibles',
};

const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemon(100);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap gap-10 items-center justify-center'>
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className='flex flex-col justify-center items-center gap-2'
          >
            <span key={pokemon.id}>{pokemon.name}</span>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={100}
              height={100}
              alt={pokemon.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
