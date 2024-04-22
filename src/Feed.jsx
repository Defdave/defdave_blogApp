import { useContext } from "react"
import Post from "./Post"
import DataContext from "./context/DataContext"

function Feed({posts}) {
  return (
    <>
    {
      posts.map(post => (
        <Post key={post.id} post={post} />
      ))
    }
    </>
  )
}

export default Feed