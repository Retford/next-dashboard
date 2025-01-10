import { FavoritePokemons } from '@/pokemons/components/FavoritePokemons';

export const metadata = {
  title: 'Favoritos',
  description: 'Aquí se muestra los Pokémon favoritos',
};

export default function FavoritesPage() {
  return (
    <div className='flex flex-col p-2'>
      <span className='text-5xl my-2'>
        Pokemons favoritos <small className='text-blue-500'>Global State</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
