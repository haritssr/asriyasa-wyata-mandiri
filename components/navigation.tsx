import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

export default function Navigation() {
  const router = useRouter();
  return (
    <div className='sticky top-0 bg-white z-50'>
      <Head>
        <title>CV Asriyasa Wyata Mandiri</title>
      </Head>
      <nav className='w-full border-b border-zinc-200 '>
        <nav className='max-w-5xl flex items-center justify-between mx-auto py-2 sm:py-4 px-4 sm:px-0'>
          <div className='w-1/2'>
            <Link href='/'>Logo</Link>
          </div>
          <div className='w-1/2'>
            <div className='block sm:hidden'>
              <div className='flex items-center justify-end'>
                <Route />
              </div>
            </div>
            <section className='hidden sm:block'>
              <section className='flex items-center justify-end space-x-5'>
                <NavLink href='/' name='BERANDA' />
                <NavLink href='/nice-time' name='NICE TIME' />
                <NavLink href='/tentang-kami' name='TENTANG KAMI' />
              </section>
            </section>
          </div>
        </nav>
      </nav>
    </div>
  );
}

function NavLink({ name, href }: { name: string; href: string }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`hover:text-blue-600 ${router.asPath === href ? 'text-blue-600' : ''}`}
    >
      {name}
    </Link>
  );
}
// const routes = [{ href: 'Beranda' }, { href: 'Nice Time' }, { href: 'Tentang Kami' }];
const routes = [
  { id: 1, route: '/', name: 'Beranda' },
  { id: 2, route: '/nice-time', name: 'Nice Time' },
  { id: 3, route: '/tentang-kami', name: 'Tentang Kami' },
];

function Route() {
  const [selectedPerson, setSelectedPerson] = useState(routes[0]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const thisPage = router.asPath === selectedPerson.route ? selectedPerson.name : 'yeah';
  console.log('router.pathname : ', router.pathname);
  console.log('selectedPerson.route : ', selectedPerson.route);

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className=' flex w-fit px-2 py-0.5 rounded border items-center space-x-1'>
        {thisPage}
        <ChevronDownIcon className='h-4 w-4 text-zinc-400' />
      </Listbox.Button>
      <Listbox.Options unmount={open} className='absolute mt-32 bg-white p-2 rounded-md'>
        {routes.map(person => (
          <Listbox.Option
            key={person.id}
            value={person}
            onClick={() => {
              setOpen(false);
              setSelectedPerson(routes[person.id - 1]);
            }}
          >
            <Link href={person.route}>{person.name}</Link>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
