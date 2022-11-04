import Image from 'next/image';

export default function TentangKami() {
  return (
    <div>
      <Image
        alt=''
        src='https://picsum.photos/seed/picsum/200/300'
        width={200}
        height={300}
        className='aspect-video w-full h-[300px] object-cover'
      />
      {/* our mission */}
      <section className='flex flex-col sm:flex-row-reverse'>
        <Image
          alt=''
          src='https://picsum.photos/seed/picsum/200/300'
          width={400}
          height={300}
          className='aspect-video sm:w-1/2 w-full sm:p-4'
        />
        <div className='bg-green-100 w-full sm:w-1/2 p-4  '>
          <div className='bg-purple-200 -translate-y-20 sm:-translate-y-0 p-4'>
            <div className='py-3 text-2xl'>OUR MISSION</div>
            <div className='w-1/2 h-[2px] bg-zinc-500 rounded-full mb-3'></div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni eveniet, culpa ea
            reiciendis quidem dolorem voluptatem ex aspernatur voluptatibus libero ipsa sunt odit
            commodi voluptate? Est cupiditate aperiam nulla illum tempore laborum doloribus incidunt
            expedita perspiciatis, iste unde dolores explicabo officiis obcaecati deleniti
            aspernatur. Perspiciatis expedita, debitis error totam delectus neque ullam sequi
            praesentium modi consequuntur reiciendis optio officiis quaerat laudantium vero
            blanditiis dolores facilis illo fuga ea necessitatibus molestiae ab repellat explicabo
          </div>
        </div>
      </section>
      {/* our vision */}
      <section className='flex flex-col sm:flex-row'>
        <Image
          alt=''
          src='https://picsum.photos/seed/picsum/200/300'
          width={400}
          height={300}
          className='aspect-video sm:w-1/2 w-full sm:p-4'
        />
        <div className='bg-green-100 w-full sm:w-1/2 p-4  '>
          <div className='bg-purple-200 -translate-y-20 sm:-translate-y-0 p-4'>
            <div className='py-3 text-2xl'>OUR VISION</div>
            <div className='w-1/2 h-[2px] bg-zinc-500 rounded-full mb-3'></div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni eveniet, culpa ea
            reiciendis quidem dolorem voluptatem ex aspernatur voluptatibus libero ipsa sunt odit
            commodi voluptate? Est cupiditate aperiam nulla illum tempore laborum doloribus incidunt
            expedita perspiciatis, iste unde dolores explicabo officiis obcaecati deleniti
            aspernatur. Perspiciatis expedita, debitis error totam delectus neque ullam sequi
            praesentium modi consequuntur reiciendis optio officiis quaerat laudantium vero
            blanditiis dolores facilis illo fuga ea necessitatibus molestiae ab repellat explicabo
          </div>
        </div>
      </section>
    </div>
  );
}
