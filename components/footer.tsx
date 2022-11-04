import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  // const router = useRouter();
  // console.log(router.asPath);
  return (
    <footer className='w-full mt-20 mx-auto max-w-5xl bg-red-200 bottom-0 relative'>
      <div className='grid grid-cols-1 sm:grid-cols-6 gap-5 sm:gap-0'>
        <section className='sm:col-span-2 bg-green-100'>
          <div className=''>logo</div>
        </section>
        <section className='flex flex-col space-y-1 sm:col-span-2'>
          <div className=''>TAUTAN</div>
          <NavLink href='/' name='BERANDA' />
          <NavLink href='/nice-time' name='NICE TIME' />
          <NavLink href='/tentang-kami' name='TENTANG KAMI' />
        </section>
        <section className='sm:col-span-2'>
          <div className=''>ALAMAT</div>
          <div className=''>Ruko Emerald Avenue 1, Blok EA / A27</div>
          <div className=''>Jalan Boulevard Bintaro Jaya CBD Emerald</div>
          <div className=''>Parigi, Kec. Pd. Aren, Kota Tangerang Selatan</div>
          <div className=''>Banten 15227</div>
        </section>
      </div>
      <div className='text-center bg-blue-100 mt-5 sm:mt-0 text-sm sm:text-base flex flex-col sm:flex-row'>
        <div>&copy; CV {new Date().getFullYear()} ASRIYASA WYATA MANDIRI.</div>
        <div>All Right Reserved.</div>
      </div>
    </footer>
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
