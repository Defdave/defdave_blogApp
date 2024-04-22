import { Link } from "react-router-dom/cjs/react-router-dom.min"

function Missing() {
  return (
    <main>
      <h2>Page Not found</h2>
      <p>well, that is disappointing</p>
      <p>
        <Link to='/'>Vist Our Homepage</Link>
      </p>
    </main>
  )
}

export default Missing