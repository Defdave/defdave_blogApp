// import { useContext, useEffect, useState } from "react"
// import DataContext from "./context/DataContext"
import { format } from "date-fns"
// import api from "./api/posts"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useStoreState, useStoreActions } from 'easy-peasy'

function Newpost() {
  // const [postTitle, setPostTitle] = useState('')
  // const [postBody, setPostBody] = useState('')
  // const {posts, setPosts} = useContext(DataContext)
  const history = useHistory()

  const posts = useStoreState(state => state.posts)
  // const setPosts = useStoreActions(actions => actions.setPosts)
  // const getPostById = useStoreState(state => state.getPostById)
  const postTitle = useStoreState(state => state.postTitle)
  const setPostTitle = useStoreActions(actions => actions.setPostTitle)
  const postBody = useStoreState(state => state.postBody)
  const setPostBody = useStoreActions(actions => actions.setPostBody)
  const savePost = useStoreState(state => state.savePost)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime: datetime, body: postBody }
    savePost(newPost)
    history.push('/')
  }

  return (
    <main className="container px-32">
      <h2 className="text-center text-2xl">Create post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mx-4">
        <label htmlFor="postTitle">Post Title</label>
        <input id="postTitle" type="text" className="postTitle" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} required />
        </div>
        <div className="mx-4">
        <label htmlFor="postBody" style={{display: 'block', marginTop: '1rem'}}>Post Body</label>
        <textarea id="postBody" type="text" className="w-[400px] h-[200px]" value={postBody} onChange={(e) => setPostBody(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default Newpost