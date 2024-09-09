import CommonButton from '../../components/common/CommonButton';
import CommonParargraph from '../../components/common/CommonParargraph';
import CommonTitle from '../../components/common/CommonTitle';

export default function Home() {
  return (
    <main className='homepage'>
      <CommonTitle title='Welcome to AITC!' className='text-center' />
      <CommonParargraph
        text='We are a company that specializes in providing the best services for your business.'
        className='text-center'
      />
      <CommonButton
        href='/'
        className=' font-medium tracking-[0.02rem]'
        variant='primary'
      />
    </main>
  );
}
