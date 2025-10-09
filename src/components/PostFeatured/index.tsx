import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = 'qualquer';
  const postlink = `/post/${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postlink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_9.png',
          alt: 'Alt da imagem',
          priority: true,
        }}
      />
      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          className='text-slate-600 block text-sm/tight'
          dateTime='2025-10-09'
        >
          09/10/2025 10:00
        </time>

        <PostHeading url={postlink} as='h1'>
          Lorem ipsum dolor sit amet consectetur
        </PostHeading>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eius,
          quis, sed praesentium odit ullam ea, doloremque deserunt eos beatae
          libero illum odio quo accusamus nihil aspernatur. Delectus, quaerat
          tempore?
        </p>
      </div>
    </section>
  );
}
