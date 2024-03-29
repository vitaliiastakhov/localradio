import { Button } from '@/shared/ui/button/button';

interface ArchiveNavBarProps {
  list?:
    | ({
        name?: string | null | undefined;
        slug?: string | null | undefined;
      } | null)[]
    | null;
  index: number;
  variant: 'mood' | 'genres';
}

export const ArchiveNavHoverList = ({
  list,
  index,
  variant,
}: ArchiveNavBarProps) => {
  return (
    <ul
      key={list && list[0]?.slug && list[0].slug + index}
      className='flex flex-col justify-center gap-1'
    >
      {list?.map((item) => (
        <li key={item?.name}>
          <Button
            className='h-full whitespace-nowrap px-1 py-0.5 font-semibold tracking-[0.01em] transition-none lg:px-2'
            href={`/archive/${variant}/${item?.slug}`}
          >
            {item?.name}
          </Button>
        </li>
      ))}
    </ul>
  );
};
