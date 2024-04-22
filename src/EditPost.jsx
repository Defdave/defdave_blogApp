import { useEffect } from "react"
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
// import DataContext from "./context/DataContext"
// import api from "./api/posts"
import { format } from "date-fns"
import { useStoreState, useStoreActions } from 'easy-peasy'

function EditPost() {
  // const { posts, setPosts } = useContext(DataContext)

  const { id } = useParams()
  // const post = posts.find(post => (post.id).toString() === id)
  // const [editTitle, setEditTitle] = useState('')
  // const [editBody, setEditBody] = useState('')

  const editTitle = useStoreState(state => state.editTitle)
  const setEditTitle = useStoreActions(actions => actions.setEditTitle)
  const editBody = useStoreState(state => state.editBody)
  const setEditBody = useStoreActions(actions => actions.setEditBody)
  const editPost = useStoreState(state => state.editPost)
  const getPostById = useStoreState(state => state.getPostById)
  const post = getPostById(id)

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const updatedPost = { id, title: editTitle, datetime: datetime, body: editBody }
    editPost(updatedPost)
    history.push(`/post/${id}`)
  }

  useEffect(() => {
    if (post) {
      setEditTitle(post.title)
      setEditBody(post.body)
    }

  }, [post, setEditTitle, setEditBody])


  return (
    <main>
      <h2>Edit post</h2>
      {
        editTitle &&
        <>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input id="postTitle" type="text" className="postTitle" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} required />
            <label htmlFor="postBody" style={{ display: 'block', marginTop: '1rem' }}>Post Body:</label>
            <textarea id="postBody" type="text" className="postBody" value={editBody} onChange={(e) => setEditBody(e.target.value)} required />
            <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
          </form>
        </>
      }
      {!editTitle &&
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit our Homepage</Link>
          </p>
        </>
      }
    </main>
  )
}

export default EditPost