import { Link } from "react-router-dom/cjs/react-router-dom.min"

function Post({post}) {
  return (
    <article className="my-6 bg-[#6EB5FF] p-4 rounded-md">
      <Link to={`/post/${post.id}`}>
      <h2>{post.title}</h2>
      <p>{post.datetime}</p>
      </Link>
      <p>
        {
          post.body.length <= 80 ? 
          (post.body) :
          (`${(post.body).slice(0, 80)}...`)
        }
      </p>
    </article>
  )
}

export default Post