import Image from 'next/image';
import {
  IoBrowsersOutline,
  IoCalculator,
  IoHeartOutline,
  IoLogoReact,
} from 'react-icons/io5';
import { CgPokemon } from 'react-icons/cg';
import { SidebarMenuItems } from './SidebarMenuItems';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subTitle: 'Visualización',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subTitle: 'Contador Client Side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <CgPokemon size={40} />,
    title: 'Pokémons',
    subTitle: 'Pokémon disponibles',
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline size={40} />,
    title: 'Favoritos',
    subTitle: 'Pokémon favoritos',
  },
];

export const Sidebar = () => {
  return (
    <div
      id='menu'
      style={{ width: '400px' }}
      className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0'
    >
      <div id='logo' className='my-4 px-6'>
        <h1 className='text-lg flex items-center md:text-2xl font-bold text-white'>
          <IoLogoReact className='mr-2' />
          <span>Dash</span>
          <span className='text-blue-500'>8</span>.
        </h1>
        <p className='text-slate-500 text-sm'>
          Manage your actions and activities
        </p>
      </div>
      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              className='rounded-full w-8 h-8'
              src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'
              alt='user logo'
              width={50}
              height={50}
            />
          </span>
          <span className='text-sm md:text-base font-bold'>
            Retford O&#39;briam
          </span>
        </a>
      </div>
      <div id='nav' className='w-full px-6'>
        {menuItems.map((item) => (
          <SidebarMenuItems key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
