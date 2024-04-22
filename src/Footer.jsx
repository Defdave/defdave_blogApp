import { useStoreState } from 'easy-peasy'

function Footer() {
  // const today = new Date()
  const postCount = useStoreState(state => state.postCount)
  return (
    <footer className='bg-[#2C3E50] text-[#FDFDFD] py-2'>
      {/* <p>copyright &copy; {today.getFullYear()}</p> */}
      <p className='flex justify-center'>{postCount} Blog Posts</p>
    </footer>
  )
}

export default Footer