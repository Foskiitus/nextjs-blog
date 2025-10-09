import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import PostCoverImage from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

// page.tsx (server) -> menu.tsx (server) -> link (client)

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: '/#',
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

          <PostHeading url='#' as='h1'>
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

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
