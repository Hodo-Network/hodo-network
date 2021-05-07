export default function SocialLink({
  href,
  title,
  viewbox,
  children,
}: {
  href: string;
  title: string;
  viewbox?: string;
  children: any;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='text-gray-400 hover:text-gray-500'>
      <span className='sr-only'>{title}</span>
      <svg
        className='h-6 w-6'
        fill='currentColor'
        viewBox={viewbox ? viewbox : "0 0 24 24"}
        aria-hidden='true'>
        {children}
      </svg>
    </a>
  );
}
