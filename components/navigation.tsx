import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className='sticky top-0 bg-white z-50'>
      <Head>
        <title>CV Asriyasa Wyata Mandiri</title>
      </Head>
      <nav className='w-full border-b border-zinc-200 '>
        <nav className='max-w-5xl flex items-center justify-between mx-auto py-2 sm:py-4 px-4 sm:px-0'>
          <Link href='/'>Logo</Link>
          <div className='hidden sm:block'>
            <section className='flex items-center space-x-5'>
              <NavLink href='/' name='BERANDA' />
              <NavLink href='/nice-time' name='NICE TIME' />
              <NavLink href='/tentang-kami' name='TENTANG KAMI' />
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
