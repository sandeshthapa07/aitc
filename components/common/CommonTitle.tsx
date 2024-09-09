import { cn } from '../../utils/cn';

interface CommonTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  className?: string;
}

const CommonTitle = ({ className, title }: CommonTitleProps) => {
  return (
    <h2
      className={cn(
        'text-[2rem] font-black text-mainBlack xmd:text-[2.5rem] lg:text-5xl ',
        className
      )}
    >
      {title}
    </h2>
  );
};

export default CommonTitle;
