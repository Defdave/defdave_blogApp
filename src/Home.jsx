import { useContext } from "react"
import Feed from "./Feed"
import DataContext from "./context/DataContext"
import { useStoreActions, useStoreState } from "easy-peasy"
import Footer from "./Footer"

function Home({ isLoading, fetchError }) {
  // const { isLoading, fetchError, searchResults } = useContext(DataContext)
  const searchResults = useStoreState(state => state.searchResults)

  return (
    <>
    <main className="mx-auto w-[80%]">
      {
        isLoading && <p>Loading post...</p>
      }
      {
        !isLoading && fetchError && <p style={{color: 'red'}}>Fetch Error</p>
      }
      {
        !isLoading &&
          !fetchError &&
          (searchResults.length ?
          (<Feed posts={searchResults} />) :
          (<p>no post to display</p>))

      }
    </main>
    <Footer />
    </>
  )
}

export default Home