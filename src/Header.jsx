import useWindowSize from "./Hooks/useWindowSize"

function Header({ title }) {
  const { width } = useWindowSize()

  return (
    <header className="bg-[#2C3E50] text-[#FDFDFD]">
      <div className="mx-auto w-[80%] py-3 flex justify-between items-center">
        <h1 className="text-xl">
          {title}</h1>
        <h1 style={{
          color: '#fff',
        }}>
          {width}
        </h1>
      </div>
    </header>

  )
}

export default Header