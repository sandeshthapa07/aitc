import { cn } from '../../utils/cn';

interface CommonParargraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  className?: string;
}
const CommonParargraph = ({ text, className }: CommonParargraphProps) => {
  return (
    <p className={cn('font-medium text-mainBlack  xmd:text-lg', className)}>
      {text}
    </p>
  );
};

export default CommonParargraph;
