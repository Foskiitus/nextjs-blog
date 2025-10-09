import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import PostSummary from '../PostSummary';

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
      <PostSummary
        createdAt='2025-04-07T00:24:38.616Z'
        excerpt='O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.'
        title='Rotina matinal de pessoas altamente eficazes'
        postHeading='h1'
        postLink={postlink}
      ></PostSummary>
    </section>
  );
}
