// import { useContext } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
// import DataContext from "./context/DataContext"
import { useStoreState, useStoreActions } from 'easy-peasy'
import { useEffect } from "react"

function Nav() {
  // const {search, setSearch} = useContext(DataContext)
  const posts = useStoreState(state => state.posts)
  const search = useStoreState(state => state.search)
  const setSearch = useStoreActions(actions => actions.setSearch)
  const setSearchResult = useStoreActions(actions => actions.setSearchResult)

  useEffect(() => {
    const filteredPost = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()))

    setSearchResult(filteredPost.reverse())
  }, [posts, search, setSearchResult])

  return (
    <nav className="bg-[#F1C40F] text-[#333333] py-2 text-lg">
      <div className="flex justify-between mx-auto w-[80%]">
        <ul className="flex">
          <li className="ml-2"><Link to='/'>Home</Link></li>
          <li className="ml-2"><Link to='/post'>Post</Link></li>
          <li className="ml-2"><Link to='/about'>About</Link></li>
        </ul>

        <form onSubmit={(e) => e.preventDefault()} className="flex justify-center items-center">
          <label htmlFor="search">
            Search Post
          </label>
          <input
            type="text"
            placeholder="Search Post"
            id="search"
            value={search}
            className="border-solid border-2 text-sm mx-2 rounded-md p-1 outline-none text-black"
            onChange={(e) => setSearch(e.target.value)} />
        </form>
      </div>

    </nav>
  )
}

export default Nav