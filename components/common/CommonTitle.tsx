import { cn } from '../../utils/cn';

interface CommonTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  className?: string;
}

const CommonTitle = ({ className, title }: CommonTitleProps) => {
  return (
    <h2
      className={cn(
        'text-2xl font-black text-mainBlack xmd:text-[2.5rem] lg:text-5xl ',
        className
      )}
    >
      {title}
    </h2>
  );
};

export default CommonTitle;

export const CommonHeader = ({ className, title }: CommonTitleProps) => {
  return (
    <h3
      className={cn('text-lg font-bold uppercase  text-mainBlack  ', className)}
    >
      {title}
    </h3>
  );
};
