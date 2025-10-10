import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='pb-16 text-center'>
      <p className=''>
        Copyright © {new Date().getFullYear()} - <Link href='/'>The Blog</Link>
      </p>
    </footer>
  );
};
