import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='space-y-2'>
      {/* hero image */}
      {/* <section className='min-h-[300px] bg-blue-200'></section> */}
      <Image
        alt=''
        src='https://picsum.photos/seed/picsum/200/300'
        width={200}
        height={300}
        className='aspect-video w-full h-[300px] object-cover'
      />
      {/* menganal perusahaan */}
      <section className='min-h-[300px] bg-blue-200 p-4 sm:w-1/2 mx-auto'>
        <div className='py-2'>Mengenal Perusahaan</div>
        <div className='h-1 bg-zinc-700 mb-2' />
        <div className=''>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptate placeat
          repudiandae sapiente omnis consequatur facilis nesciunt voluptates? Animi doloribus autem
          facilis, aut voluptatum obcaecati error quae nobis adipisci fugiat sapiente, in, saepe
          numquam. Vel, quasi et aperiam in hic quas assumenda sint deleniti
        </div>
      </section>
      {/* arsya cafe */}
      <section className='min-h-[300px] bg-blue-200'>
        <Image
          alt=''
          src='https://picsum.photos/seed/picsum/200/300'
          width={200}
          height={300}
          className='aspect-video w-full h-[300px] object-cover'
        />
        <div className='flex sm:justify-end '>
          <div className='grid grid-cols-4 bg-red-100 w-full sm:w-1/2 '>
            <div className='col-span-1 flex items-center justify-center'>
              <div className='h-14 w-14  bg-emerald-200 flex items-center justify-center'>logo</div>
            </div>
            <div className='bg-pink-500 col-span-3 p-2'>
              <div className='py-2'>ARSYA CAFE</div>
              <div className='h-1 bg-zinc-700 mb-1' />
              <div className='mb-2'>Lorem ipsum dolor sit, amet consectetur.</div>
              <Link href='/nice-time' className='bg-purple-600 text-white px-4 py-1.5 rounded-md'>
                Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* arsya buah */}
      <section className='min-h-[300px] bg-blue-200'>
        <Image
          alt=''
          src='https://picsum.photos/seed/picsum/200/300'
          width={200}
          height={300}
          className='aspect-video w-full h-[300px] object-cover'
        />
        <div className='flex sm:justify-end '>
          <div className='grid grid-cols-4 bg-red-100 w-full sm:w-1/2 '>
            <div className='col-span-1 flex items-center justify-center'>
              <div className='h-14 w-14  bg-emerald-200 flex items-center justify-center'>logo</div>
            </div>
            <div className='bg-pink-500 col-span-3 p-2'>
              <div className='py-2'>ARSYA buah</div>
              <div className='h-1 bg-zinc-700 mb-1' />
              <div className='mb-2'>Lorem ipsum dolor sit, amet consectetur.</div>
              <Link href='/nice-time' className='bg-purple-600 text-white px-4 py-1.5 rounded-md'>
                Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
