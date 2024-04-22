// import { useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"
// import DataContext from "./context/DataContext";
import api from "./api/posts"
import { useStoreState } from 'easy-peasy'

function Postpage() {
  // const {posts, setPosts} = useContext(DataContext)
  
  const {id} = useParams();
  // const post = posts.find(post => (post.id).toString() === id)
  const history = useHistory()
  
  const getPostById = useStoreState(state => state.getPostById)
  const post = getPostById(id)
  const deletePost = useStoreState(state => state.deletePost)

  const handleDelete = async (id) => {
    deletePost(id)
    history.push('/')
  }

  return (
    <main>
      <article>
        {post && 
        <>
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
        <p className="postBody">{post.body}</p>
        <Link to={`/edit/${post.id}`}><button>Edit Post</button></Link>
        <button onClick={() => handleDelete(post.id)}>Delete Post</button>
        </>
        }
        {!post &&
        <>
        <h2>Post Not Found</h2>
        <p>Well, that's disappointing.</p>
        <p>
          <Link to="/">Visit our Homepage</Link>
        </p>
        </>
        }
    </article>
    </main>
  )
}

export default Postpage